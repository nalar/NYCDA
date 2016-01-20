import java.awt.Color;
import java.awt.Graphics;
import java.awt.Font;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import javax.swing.JCheckBox;
import javax.swing.JLabel;
import javax.swing.JButton;
import javax.swing.JSlider;
import javax.swing.JComboBox;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import org.powerbot.concurrent.Task;
import org.powerbot.concurrent.strategy.Strategy;
import org.powerbot.concurrent.strategy.Condition;
import org.powerbot.game.api.ActiveScript;
import org.powerbot.game.api.Manifest;
import org.powerbot.game.api.methods.Calculations;
import org.powerbot.game.api.methods.Game;
import org.powerbot.game.api.methods.Settings;
import org.powerbot.game.api.methods.Tabs;
import org.powerbot.game.api.methods.Walking;
import org.powerbot.game.api.methods.Widgets;
import org.powerbot.game.api.methods.input.Mouse;
import org.powerbot.game.api.methods.interactive.NPCs;
import org.powerbot.game.api.methods.interactive.Players;
import org.powerbot.game.api.methods.node.SceneEntities;
import org.powerbot.game.api.methods.node.Menu;
import org.powerbot.game.api.methods.tab.Inventory;
import org.powerbot.game.api.methods.tab.Skills;
import org.powerbot.game.api.methods.widget.Camera;
import org.powerbot.game.api.util.Random;
import org.powerbot.game.api.util.Time;
import org.powerbot.game.api.util.Timer;
import org.powerbot.game.api.wrappers.Area;
import org.powerbot.game.api.wrappers.Tile;
import org.powerbot.game.api.wrappers.interactive.NPC;
import org.powerbot.game.api.wrappers.node.Item;
import org.powerbot.game.api.wrappers.node.SceneObject;
import org.powerbot.game.api.wrappers.widget.Widget;
import org.powerbot.game.api.wrappers.widget.WidgetChild;
import org.powerbot.game.bot.event.MessageEvent;
import org.powerbot.game.bot.event.listener.MessageListener;
import org.powerbot.game.bot.event.listener.PaintListener;

@Manifest(authors = { "Nalar" }, name = "MasterFamine", description = "This script pickpockets master farmers in Draynor Village, which a large number of options." )
public class MasterFamine extends ActiveScript implements PaintListener, MessageListener, Condition, Task { // Note that we will be using PaintListener and MessageListener 
	// NPC
	private int FarmerID = 2234;
	// Bank
	private int BankCounterID[] = { 2012, 2015, 2019 };
	private final Area BankArea = new Area(new Tile(3093, 3240, 0), new Tile(3092, 3246, 0));
	private final Area MarketArea = new Area(new Tile(3086, 3244, 0), new Tile(3074, 3260, 0));
	// Paths
	private final Tile[] toBank = new Tile[] { new Tile(3080, 3251, 0), new Tile(3084, 3248, 0), new Tile(3090, 3247,0), new Tile(3092, 3243, 0) };
	private final Tile[] toMarket = new Tile[] { new Tile(3092, 3243, 0), new Tile(3090, 3247, 0), new Tile(3084, 3248, 0), new Tile(3080, 3251, 0) };
	// Items
	private final int CheapSeedID[] = { 5319, 5307, 5305, 5322, 5099, 5310, 5308, 5102, 5294, 5309,
										5101, 5096, 5324, 5306, 5291, 5103, 5292, 5097, 5281, 5098, 
										5105, 5106, 5280, 5297, 5311, 5104, 5293, 5318, 5282, 1993,
										5320, 1937}; 
	private final int GloveID = 10075; 
	private String Status = "Starting";
	private int FoodID = 0;					// Set from GUI
	String[] foodNames = { "Trout", "Tune", "Lobster", "Swordfish", "Monkfish", "Wine" };
	private String TicketName = "Spin ticket"; 
	// Others
	private int HealPct = 10;				// Set from GUI
	private int RandomInt;
	// Booleans
	private boolean Banking = false;
	private boolean Eating = false;
	private boolean Dropping = false;
	private boolean Gloves = false;
	private boolean Excalibur = false;
	private boolean KillGuards = false;
	private boolean prepareInv = true;
	private boolean GlovesEquipped = false;
	private boolean invPrepped = false;		// Inventory prepared
	private boolean Launch = true;			// My logic sucks, this fixes it
	private boolean AntiBanOn = true;		// Debug purposes
	private boolean GUIFinished = false;
	private boolean NoFood = false;
	//GUI
	private JPanel contentPane;
	// Statistics
	private int SingleCount = 0;			// Set the starting amount of succesfull pickpockets to 0
	private int FailCount = 0;				// Also set the starting amount of failed pickpockets to 0
	private int DPCount = 0;				// Double loot count
	private int TripleCount = 0;			// Triple loot count
	private int QuadCount = 0;				// Quadruple loot count
	private int XPgain = 0;					// Empty at the moment
	private int StartXP = 0;				// Starting xp at 0
	private long StartTime = 0;				// Starting time at 0
	private Timer runTime = null;
	
	// Setp
	private final Strategy setup = new Strategy(this, this);
	@Override
	protected void setup() {
		// Give some output to the RSBot log
		log.info("Welcome to NalarMF");
		log.info("Please report any bugs in the topic on the Powerbot forums");
		// Get some of the starting parameters
        StartXP = Skills.getExperience(Skills.THIEVING);
        // Load the necessary pictures for the paint
        	// Paint pictures are not implemented yet ;-)
		setup.setReset(true);
		// Provide all the neccesary tasks
        provide(setup); 
		provide(new stealSeeds());	// This will handle the actual pick pocketing
		provide(new walkBank());	// This will handle walking to the bank
		provide(new depositAll());  // This will bank all items in inventory
		provide(new prepareInv());	// This will handle the actual banking of the seeds and withdrawing of food
		provide(new walkMarket());	// This will handle walking back to the market
		provide(new killGuard());	// This will handle any combat situation
		provide(new eatFood());		// This will handle the healing, including excalibur
		provide(new dropSeeds());	// This will handle the dropping of "junk" seeds
		provide(new equipGloves());	// This will handle the use of Gloves of Silence
		provide(new spinTicket()); 	// This will handle any (unbankable) spin tickets

		Strategy antiban = new Strategy(new AntiBan());
		antiban.setLock(false);
		provide(new AntiBan());		// This will handle the antiban of the script
	}
	
	@Override
    public boolean validate() {
        return Game.isLoggedIn() && Players.getLocal() != null && Players.getLocal().isOnScreen();
    }
    @Override
    public void run() {
        final GUI gui = new GUI();
        gui.setVisible(true);

        while (isRunning() && gui.isRunning() && gui.isVisible()) // Wait for the GUI to be handled
            Time.sleep(100);

        if (gui.isRunning()) { // If user exits out of GUI, we dispose of the GUI and stop the script
            gui.dispose();
            stop();
        }

        revoke(setup); // This strategy only needs to run once, so we remove it from processing
    }
	/**
	 * All tasks are here
	 */
    private class depositAll extends Strategy implements Task {
		public boolean validate() {
			/**
			 * check if the player is in the bank area
			 */
			return GUIFinished == true && Launch == true && Banking == true || GUIFinished == true && Banking == true && Inventory.getCount() == 28 && BankArea.contains(Players.getLocal().getLocation());
		}
		
		public void run() {
			/**
			 * Open the bank
			 * Deposit all items
			 */
			Status = "Depositing items.";
			if (Tabs.getCurrent() != Tabs.INVENTORY) {
				Tabs.INVENTORY.open();
			}
			final Widget BankScreen = Widgets.get(762);
			final WidgetChild depositButton = Widgets.get(762, 34);
			if (BankScreen.validate()) {
					if (depositButton.validate() && depositButton.isVisible()) {
						if (depositButton.click(true)) {
							Launch = false;
							Time.sleep(Random.nextInt(1000, 2000));
						}
					}
				}
			 else {
				final SceneObject Booth = SceneEntities.getNearest(BankCounterID);
				if (Booth != null) {
					if (Booth.isOnScreen()) {
						if (Booth.interact("Bank"))
							Time.sleep(Random.nextInt(1000, 2000));
					}
				}
			}
		}
	}
	private class prepareInv extends Strategy implements Task {
        public boolean validate() {
        	/**
        	 * Player is in BankArea
        	 * Inventory is empty
        	 */
        	return GUIFinished == true && prepareInv == true && Inventory.getCount() == 0 && BankArea.contains(Players.getLocal().getLocation()) || GUIFinished == true && prepareInv == false && Banking == true && Inventory.getCount() == 0 && BankArea.contains(Players.getLocal().getLocation());
        }

        public void run() {
        	/**
        	 * Open the bank
        	 * Withdraw gloves when enabled
        	 * Withdraw food when enabled
        	 */
        	Status = "Withdrawing items";
        	if (Tabs.getCurrent() != Tabs.INVENTORY) {
				Tabs.INVENTORY.open();
			}
			final Widget BankScreen = Widgets.get(762);
			if (BankScreen.validate()) {
					if (Gloves == true) {
						withdrawOne(GloveID);
						Time.sleep(Random.nextInt(1000, 2000));
					}
					if (Eating == true) {
						withdrawFive(FoodID);
						Time.sleep(Random.nextInt(1000, 2000));
					}
		        	prepareInv = false;
		        	invPrepped = true;
		        	Launch = false;
		        	Widgets.get(762, 45).click(true);
				}
			 else {
				final SceneObject Booth = SceneEntities.getNearest(BankCounterID);
				if (Booth != null) {
					if (Booth.isOnScreen()) {
						if (Booth.interact("Bank"))
							Time.sleep(Random.nextInt(1000, 2000));
					}
				}
			}        
        }
}
	private class walkMarket extends Strategy implements Task {
        public boolean validate() {
        	/**
        	 * Current SceneObject is not MarketArea
        	 * Inventory is not full
        	 */
        	return GUIFinished == true && Launch == false && invPrepped && Inventory.getCount() != 28 && !MarketArea.contains(Players.getLocal().getLocation());
        }
        
        public void run() {
        	/**
        	 * Enable run
        	 * Walk to the market
        	 * Reset booleans used for banking
        	 */
        	Status = "Walking to the market";
        	Walking.setRun(true);
        	walkPath(toMarket);
        	prepareInv = false;
        }
}	
	private class stealSeeds extends Strategy implements Task {
        public boolean validate() {
        	/** Validate if the following is true:
        	 * Player is in the MarketArea
        	 * Inventory not full
        	 * 		If it is full, is banking turned off
        	 */
        	return GUIFinished == true && Launch == false && Inventory.getCount() != 28 && MarketArea.contains(Players.getLocal().getLocation()) || GUIFinished == true && Launch == false && Banking == false && MarketArea.contains(Players.getLocal().getLocation());
        }

        public void run() {
        	/** This is what this class does
        	 * Get the closest master farmer
        	 * Interact with the closest master farmer
        	 */
        	Status = "Pickpocketting";
        	NPC targetFarmer = NPCs.getNearest(FarmerID);
        	if(Players.getLocal().getInteracting() == null){
				if(targetFarmer.isOnScreen()){
					targetFarmer.interact("Pickpocket");
					Time.sleep(Random.nextInt(100, 300));
				}
				}
//				else {
//					Walking.walk(targetFarmer.getLocation());
//					Time.sleep(Random.nextInt(500, 1000));
//				}
        	}
        }
	private class killGuard extends Strategy implements Task {
        public boolean validate() {
        	/**
        	 * Player is in combat
        	 */
        	return GUIFinished == true && Launch == false && Players.getLocal().isInCombat() && !BankArea.contains(Players.getLocal().getLocation());
        }

        public void run() {
        	/**
        	 * Run away if combat is disabled
        	 * Kill the guard if combat is enabled
        	 */
        	Status ="Stunned or in combat";
        	if (KillGuards == true) {
        	Status = "Waiting for the guard to die.";
        	Time.sleep(Random.nextInt(2000, 5000));
        	}
        	Walking.setRun(true);
        	walkPath(toBank);
        }
}
	private class eatFood extends Strategy implements Task {
        public boolean validate() {
        	/**
        	 * Eating is enabled
        	 * HP is under limit set using GUI
        	 */
        	return GUIFinished == true && Launch == false && Eating == true && (Players.getLocal().getHpPercent() <= HealPct);
        }

        public void run() {
        	/**
        	 * If excalibur is enable use that
        	 * Else eat food
        	 */
        	Status = "Healing";
        	if (Excalibur == true && Settings.get(300) / 10 == 100) {
        		Tabs.ATTACK.open();
        		Widgets.get(884, 4).click(true);
                Time.sleep(Random.nextInt(500, 1000));
                return;
                
        	}
        	if (Tabs.getCurrent() != Tabs.INVENTORY) {
				Tabs.INVENTORY.open();
			}
        	for (final Item i : Inventory.getItems()) {
                if (i != null && i.getId() == FoodID) {
                        i.getWidgetChild().interact("Eat");
                        Time.sleep(Random.nextInt(200, 800));
                        return;
                    }
        	}
        }
}
	private class walkBank extends Strategy implements Task {
        public boolean validate() {
        	/** 
        	 * Banking is enabled
        	 * Inventory is full
        	 * SceneObject is not BankArea
        	 */
        	return GUIFinished == true && Launch == true && Banking == true  && !BankArea.contains(Players.getLocal().getLocation()) || Banking == true && Inventory.getCount() == 28 && !BankArea.contains(Players.getLocal().getLocation()) ||  Banking == true && NoFood == true && !BankArea.contains(Players.getLocal().getLocation());
        }

        public void run() {
        	/**
        	 * Walk to the correct place
        	 */
        	Status = "Walking to bank";
        	Walking.setRun(true);
			walkPath(toBank);
        }
}
	private class dropSeeds extends Strategy implements Task {
        public boolean validate() {
        	/**
        	 * Inventory is full
        	 * Dropping is enabled
        	 */
        	return GUIFinished == true && Launch == false && Dropping == true && Inventory.getCount() == 28;        	
        }

        public void run() {
        	/**
        	 * Drop all seeds in CheapSeedID
        	 */
        	Status = "Dropping seeds";
        	if(!Tabs.INVENTORY.open()) {
        		Tabs.INVENTORY.open();
        	}
        	for (Item i : Inventory.getItems()) {
                for (int id : CheapSeedID) {
                    if (i.getId() == id) {
                        i.getWidgetChild().interact("drop");
                        Time.sleep(Random.nextInt(100, 200));
                        break;
                        }
            	}
            }
        }
}
	private class equipGloves extends Strategy implements Task {
        public boolean validate() {
        	/**
        	 * Are gloves enabled
        	 * Are gloves equipped
        	 */
        	return GUIFinished == true && invPrepped == true && Gloves == true && GlovesEquipped == false;
        }

        public void run() {
        	/**
        	 * Open inventory
        	 * Equip gloves
        	 * set equipped bool to true
        	 */
        	Status = "Equipping gloves of silence";
        	if (Tabs.getCurrent() != Tabs.INVENTORY) {
				Tabs.INVENTORY.open();
			}
        	for (final Item i : Inventory.getItems()) {
                if (i != null && i.getId() == GloveID) {
                        i.getWidgetChild().interact("Wear");
                        GlovesEquipped = true;
                        Time.sleep(Random.nextInt(200, 800));
                        return;
                    }
        	}	
        }
}
	private class spinTicket extends Strategy implements Task {
        public boolean validate() {
        	/**
        	 * Are gloves enabled
        	 * Are gloves equipped
        	 */
        	return GUIFinished == true && BankArea.contains(Players.getLocal().getLocation()) && Inventory.getCount() == 1;
        }

        public void run() {
        	/**
        	 * Claim spin tickets
        	 */
        	log.info("We have a stupid spin ticket.");
        	Status = "Claiming spin";
        	if (Tabs.getCurrent() != Tabs.INVENTORY) {
				Tabs.INVENTORY.open();
			}
        	for (final Item i : Inventory.getItems()) {
                if (i != null && TicketName != null && i.getName().toLowerCase().contains(TicketName.toLowerCase().trim())) {
                        i.getWidgetChild().interact("Claim");
                        Time.sleep(Random.nextInt(200, 800));
                        return;
                    }
        	}	
        }
}	
	/**
	 * Antiban
	 */
	private class AntiBan extends Strategy implements Task{
		@Override
		public boolean validate() {
            return GUIFinished == true && AntiBanOn;
    }
		@Override
		public void run(){
			if (Tabs.getCurrent() != Tabs.INVENTORY) {
				Tabs.INVENTORY.open();
			}
			RandomInt = Random.nextInt(1, 50);
			if (RandomInt <= 5) {
				Camera.setAngle(Random.nextInt(20, 300)); 
				}
//			There's a bug due to which these cause trouble
//			As in they output pp to the chatbox all the time			
//			if (RandomInt == 6) {
//				Tabs.STATS.open();
//			}
//			if (RandomInt == 7) {
//				Tabs.CLAN_CHAT.open();
//			}	
//			if (RandomInt == 8) {
//				Tabs.FRIENDS.open();
//			}
//			if (RandomInt == 9) {
//				Tabs.MUSIC.open();
//			}
//			if (RandomInt == 10) {
//				Tabs.FRIENDS_CHAT.open();
//			}
			Time.sleep(Random.nextInt(1000, 3000));
			}
         }
	/**
	 * Messagelistener and paint
	 */
	@Override
	public void messageReceived(MessageEvent e) {
		if(e.getMessage().contains("You pick the master farmer")){
			SingleCount++;
			XPgain = XPgain + 43;
		} else if(e.getMessage().contains("You fail")){
			FailCount++;
		} else if(e.getMessage().contains("double the loot")){
			DPCount++;
		} else if(e.getMessage().contains("triple the loot")){
			TripleCount++;
		} else if(e.getMessage().contains("quadruple the loot")){
			QuadCount++;
		} else if(e.getMessage().contains("Your gloves of silence are going to")){
			GlovesEquipped = false;
		}
	}
	@Override
	public void onRepaint(Graphics g) {
    	long runTimer = System.currentTimeMillis() - StartTime;
    	int XPGained = Skills.getExperience(Skills.THIEVING) - StartXP;
    	int XPHour = (int)((XPGained) * 3600000D / runTimer);
    	int XPNext = (Skills.getExperienceRequired(Skills.getLevel(Skills.THIEVING) + 1));
        int XPCurr = (Skills.getExperienceAt(Skills.getLevel(Skills.THIEVING)));
        int XPLeft = XPNext - XPCurr;
		 g.drawString("Status: "+Status, 10, 50);
		 
		 Color Color1 = new Color(0, 0, 0, 150);
		 g.setColor(Color1);
		 g.fillRect(370, 180, 130, 155);
		 
		 g.setColor(Color.WHITE);
		 g.setFont(new Font("Helvetica", 12, 12));
		 g.drawString("Single loot: "+SingleCount,  380, 200);
		 g.drawString("Double loot: "+DPCount,  380, 215);
		 g.drawString("Triple loot: "+TripleCount,  380, 230);
		 g.drawString("Quad loot: "+QuadCount, 380, 245);
		 g.drawString("Fails: "+FailCount, 380, 260);
		 g.drawString("XP Gain: "+XPGained, 380, 275);
		 g.drawString("XP/Hour: "+XPHour, 380, 290);
		 g.drawString("XP to lvl: "+XPLeft, 380, 305);
		 g.drawString("Runtime: "+ (runTime != null ? runTime.toElapsedString() : "00:00:00"), 380, 320);
		 
	}
/**
 *  The following walkPath method was taken from ProPowerChopper
 *  Credits go to Snotboy808
 */
private boolean walkPath(final Tile[] path) {
		boolean a = false;
		final Tile next = getNext(path);
		final Tile start = getStart(path);
		final Tile dest = Walking.getDestination();
		final Tile myTile = Players.getLocal().getLocation();
		if (dest.getX() == -1 || Calculations.distance(myTile, dest) < 6
				|| Calculations.distance(next, Walking.getDestination()) > 3) {

			if (!Walking.walk(next)) {
				if (Walking.walk(start)) {
					Time.sleep(500);
					a = true;
				} else {
					if (dividePath(start))
						Time.sleep(500);

				}
			} else {
				Time.sleep(500);
				a = true;
			}
		}
		return a;
	}
	private Tile getStart(final Tile[] tiles) {
		return tiles[0];
	}
	private Tile getNext(final Tile[] tiles) {
		for (int i = tiles.length - 1; i >= 0; --i) {
			if (Calculations.distance(Players.getLocal().getLocation(),
					tiles[i]) < 15) {
				return tiles[i];
			}
		}
		return null;
	}
	private boolean dividePath(final Tile t) {
		final Tile mine = Players.getLocal().getLocation();
		final int x = t.getX(), y = t.getY(), z = t.getPlane(), myX = mine
				.getX(), myY = mine.getY();
		final Tile newT = new Tile((int) (x + myX) / 2, (int) (y + myY) / 2, z);
		if (Walking.walk(newT)) {
			return true;
		}
		return dividePath(newT);
	}
/**
 * The following banking method was taken from iTPotionMixer and slightly modified
 * to withdraw one or five instead of 14 ;-)
 */
private final boolean withdrawOne(int item) {
    Widget bank = Widgets.get(762);
    WidgetChild items = bank.getChild(95);
    	int itemX = items.getAbsoluteX();
    	int itemY = items.getAbsoluteY();
        for (WidgetChild child : items.getChildren()) {
                if (child.getChildId() == item) {
                        Mouse.click(child.getRelativeX() + itemX + (child.getWidth() / 2), child.getRelativeY() + itemY + (child.getHeight() / 2), false);
                        return Menu.select("Withdraw-1");
                }
        }
        return false;
}
private final boolean withdrawFive(int item) {
    Widget bank = Widgets.get(762);
    WidgetChild items = bank.getChild(95);
    	int itemX = items.getAbsoluteX();
    	int itemY = items.getAbsoluteY();
        for (WidgetChild child : items.getChildren()) {
                if (child.getChildId() == item) {
                        Mouse.click(child.getRelativeX() + itemX + (child.getWidth() / 2), child.getRelativeY() + itemY + (child.getHeight() / 2), false);
                        return Menu.select("Withdraw-5");
                }
        }
        return false;
}

@SuppressWarnings("serial")
private class GUI extends JFrame {

        private boolean isRunning = true;

        public GUI() {
        	setResizable(true);
    		setAlwaysOnTop(true);
    		setTitle("NalarMF");
            setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);
    		setBounds(100, 100, 220, 270);
    		contentPane = new JPanel();
    		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
    		setContentPane(contentPane);
    		contentPane.setLayout(null);
    		//contentPane.setLayout(null);
    		
    		final JCheckBox chckbxNewCheckBox_1 = new JCheckBox("Eating");
    		chckbxNewCheckBox_1.setBounds(8, 23, 101, 23);
    		contentPane.add(chckbxNewCheckBox_1);
    		
    		final JCheckBox chckbxNewCheckBox = new JCheckBox("Excalibur");
    		chckbxNewCheckBox.setBounds(8, 46, 101, 23);
    		contentPane.add(chckbxNewCheckBox);
    		
    		final JCheckBox chckbxGloves = new JCheckBox("Gloves");
    		chckbxGloves.setBounds(8, 69, 101, 23);
    		contentPane.add(chckbxGloves);
    		
    		final JCheckBox chckbxDropping = new JCheckBox("Dropping");
    		chckbxDropping.setBounds(8, 93, 101, 23);
    		contentPane.add(chckbxDropping);
    		
    		final JCheckBox chckbxBanking = new JCheckBox("Banking");    	
    		chckbxBanking.setBounds(8, 117, 101, 23);
    		contentPane.add(chckbxBanking);
    		
    		final JComboBox comboBox = new JComboBox(foodNames);
    		comboBox.setBounds(69, 143, 133, 27);
    		contentPane.add(comboBox);
    		
    		JLabel lblFoodId = new JLabel("Food ID");
    		lblFoodId.setBounds(10, 147, 61, 16);
    		contentPane.add(lblFoodId);
    		
    		final JSlider slider = new JSlider();
    		slider.setPaintTicks(true);
			slider.setMajorTickSpacing(10);
			slider.setMaximum(100);
    		slider.setBounds(59, 168, 154, 29);
    		contentPane.add(slider);
    		
    		JLabel lblHeal = new JLabel("Heal %");
    		lblHeal.setBounds(10, 175, 61, 16);
    		contentPane.add(lblHeal);
    		
    		JButton btnStart = new JButton("Start");
    		btnStart.setBounds(6, 209, 117, 29);
    		contentPane.add(btnStart);
    		btnStart.addActionListener(new ActionListener() {
    			@Override
    			 public void actionPerformed(ActionEvent e) {
    				HealPct = slider.getValue();
    				log.info("Healpct : "+HealPct);
    				if (chckbxBanking.isSelected() == true) {
    					Banking = true;
    					log.info("Banking true");
    				}
    				if (chckbxBanking.isSelected() == false) {
    					Banking = false;
    					invPrepped = true;
    					Launch = false;
    					log.info("Banking false --> invprepped true");
    				}
    				if (chckbxDropping.isSelected() == true) {
    					Dropping = true;
    					log.info("Dropping true");
    				}
    				if (chckbxNewCheckBox_1.isSelected() == true) {
    					Eating = true;
    					log.info("Eating true");
    				}
    				if (chckbxGloves.isSelected() == true) {
    					Gloves = true;
    					log.info("Gloves true");
    				}
    				if (chckbxNewCheckBox.isSelected() == true) {
    					Excalibur = true;
    					log.info("Excalibur true");
    				}
    				if(comboBox.getSelectedItem().equals("Trout")){
    					FoodID = 333;
    					log.info("Food is Trout");
    				}
    				if(comboBox.getSelectedItem().equals("Tuna")){
    					FoodID = 361;
    					log.info("Food is Tuna");
    				}
    				if(comboBox.getSelectedItem().equals("Lobster")){
    					FoodID = 379;
    					log.info("Food is Lobster");
    				}
    				if(comboBox.getSelectedItem().equals("Swordfish")){
    					FoodID = 373;
    					log.info("Food is Swordfish");
    				}
    				if(comboBox.getSelectedItem().equals("Monkfish")){
    					FoodID = 7946;
    					log.info("Food is Monkfish");
    				}
    				if(comboBox.getSelectedItem().equals("Wine")){
    					FoodID = 1993;
    					log.info("Drink is Wine");
    				}
                    
    				isRunning = false;
                    GUIFinished = true;
                    StartTime = System.currentTimeMillis();
        			runTime = new Timer(0);
                    dispose();
                }
    		});
    	}

        public boolean isRunning() {
            return isRunning;
        }

	}
}
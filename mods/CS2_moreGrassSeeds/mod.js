/*
 *  Mod:					More Grass Seeds
 *  Tipo:					Mundo
 *  Vers�o:					1.7_1.0
 *  Criado:					23:00 16/06/2013
 *  �ltima Modifica��o:		13:23 09/08/2014
*/

/* Configs */
config.addIntProperty("pumpkinseedRarity", 2);													// Sementes de Ab�bora
config.addIntProperty("melonseedRarity", 2);													// Sementes de Mel�o
config.addIntProperty("carrotRarity", 5);														// Sementes de Cenoura
config.addIntProperty("potatoRarity", 4);														// Sementes de Batata
config.addIntProperty("poisonouspotatoRarity", 6);												// Sementes de Batata Estragada


/* Grass Seeds */
mod.addGrassSeed("minecraft:pumpkin_seeds 1", config.getInt("pumpkinseedRarity"));				// Adiciona sementes de ab�bora quando colhemos capim
mod.addGrassSeed("minecraft:melon_seeds 1", config.getInt("melonseedRarity"));					// Adiciona sementes de mel�o quando colhemos capim
mod.addGrassSeed("minecraft:carrot 3", config.getInt("carrotRarity"));							// Adiciona cenouras quando colhemos capim
mod.addGrassSeed("minecraft:potato 2", config.getInt("potatoRarity"));							// Adiciona batatas quando colhemos capim
mod.addGrassSeed("minecraft:poisonous_potato 2", config.getInt("poisonouspotatoRarity"));		// Adiciona batatas estragadas quando colhemos capim

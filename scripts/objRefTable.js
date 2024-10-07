const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.DragnDrop,
		C3.Behaviors.Pin,
		C3.Plugins.Audio,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Sprite.Acts.SetOpacity,
		C3.Behaviors.DragnDrop.Acts.SetEnabled,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Audio.Acts.Stop,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Audio.Acts.PlayByName,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Behaviors.Pin.Acts.PinByProperties,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Cnds.EveryTick
	];
};
self.C3_JsPropNameTable = [
	{ForestAdventure_20241002_095230_: 0},
	{ForestAdventure_20241002_103411_: 0},
	{DragDrop: 0},
	{ForestAdventure_20241002_103931_: 0},
	{Pin: 0},
	{water: 0},
	{ForestAdventure_20241002_100225_: 0},
	{ForestAdventure_20241002_103516_: 0},
	{ForestAdventure_20241002_140830_: 0},
	{tumbuhan1: 0},
	{tumbuhan2: 0},
	{tumbuhan3: 0},
	{tumbuhan4: 0},
	{ForestAdventure_20241002_141110_: 0},
	{Audio: 0},
	{bijiTertanam: 0},
	{tumbuhan: 0}
];

self.InstanceType = {
	ForestAdventure_20241002_095230_: class extends self.ISpriteInstance {},
	ForestAdventure_20241002_103411_: class extends self.ISpriteInstance {},
	ForestAdventure_20241002_103931_: class extends self.ISpriteInstance {},
	water: class extends self.ISpriteInstance {},
	ForestAdventure_20241002_100225_: class extends self.ISpriteInstance {},
	ForestAdventure_20241002_103516_: class extends self.ISpriteInstance {},
	ForestAdventure_20241002_140830_: class extends self.ISpriteInstance {},
	tumbuhan1: class extends self.ISpriteInstance {},
	tumbuhan2: class extends self.ISpriteInstance {},
	tumbuhan3: class extends self.ISpriteInstance {},
	tumbuhan4: class extends self.ISpriteInstance {},
	ForestAdventure_20241002_141110_: class extends self.ISpriteInstance {},
	Audio: class extends self.IInstance {}
}
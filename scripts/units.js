const proton = extend(UnitType, "51Proton", {
	     draw(unit) {
		this.super$draw(unit);
		Draw.rect(
			"exttech-blade-1",
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 1),
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 1),
			Time.time * -15);
	}

});
proton.constructor = () => extend(UnitEntity, {});

const neutron = extend(UnitType, "52Neutron", {
	     draw(unit) {
		this.super$draw(unit);
		Draw.rect(
			"exttech-blade-2",
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 1),
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 1),
			Time.time * -15);
	}
});
neutron.constructor = () => extend(UnitEntity, {});

const foton = extend(UnitType, "53Foton", {
	     draw(unit) {
		this.super$draw(unit);
		Draw.rect(
			"exttech-blade-3",
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 5),
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 5),
			Time.time * -15);
		Draw.rect(
			"exttech-blade-1",
			unit.x + Angles.trnsx(unit.rotation - 90, 0, -12),
			unit.y + Angles.trnsy(unit.rotation - 90, 0, -12),
			Time.time * -15);
	}
});
foton.constructor = () => extend(UnitEntity, {});

const electron = extend(UnitType, "54Electron", {
	     draw(unit) {
		this.super$draw(unit);
		Draw.rect(
			"exttech-blade-4",
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 7),
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 7),
			Time.time * -15);
	}
});
electron.constructor = () => extend(UnitEntity, {});

const tier6 = extend(UnitType, "26", {
	     draw(unit) {
		this.super$draw(unit);
		Draw.rect(
			"exttech-26-rotator",
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 0),
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 0),
			Time.time * -5);
	}
});
tier6.constructor = () => extend(UnitEntity, {});
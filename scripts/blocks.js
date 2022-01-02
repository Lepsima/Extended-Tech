const multiLib = require("multi-lib/library");
//you can use GenericSmelter instead GenericCrafter
//also GenericSmelter.SmelterBuild instead GenericCrafter.GenericCrafterBuild
//                                                                           ▼this has to be same with .json file name
//
const multi=multiLib.MultiCrafter(GenericCrafter,GenericCrafter.GenericCrafterBuild,"AmmoFactory",[
    {
        input:{
            items:["exttech-NullAmmo/2","copper/4"],
            power: 0.5
        },
        output:{
            items:["exttech-CopperAmmo/2"],
        },
        craftTime: 30
    },
    {
        input:{
            items:["exttech-NullAmmo/2","graphite/4"],
            power: 1
        },
        output:{
            items:["exttech-GraphiteAmmo/2"],
        },
        craftTime: 45
    },
    {
        input:{
            items:["exttech-NullAmmo/2","silicon/4"],
            power: 1
        },
        output:{
            items:["exttech-SiliconAmmo/2"],
        },
        craftTime: 45
    },
    {
        input:{
            items:["exttech-NullAmmo/2","metaglass/4"],
            power: 1
        },
        output:{
            items:["exttech-MetaglassAmmo/2"],
        },
        craftTime: 45
    },
    {
        input:{
            items:["exttech-NullAmmo/2","thorium/4"],
            power: 1.5
        },
        output:{
            items:["exttech-ThoriumAmmo/2"],
        },
        craftTime: 65
    },
    {
        input:{
            items:["exttech-NullAmmo/2","pyratite/4"],
            power: 1.5
        },
        output:{
            items:["exttech-PiratyteAmmo/2"],
        },
        craftTime: 65
    },
    {
        input:{
            items:["exttech-NullAmmo/2","blast-compound/4"],
            power: 2
        },
        output:{
            items:["exttech-BlastAmmo/2"],
        },
        craftTime: 65
    },
    {
        input:{
            items:["exttech-NullAmmo/2","plastanium/4"],
            power: 2.5
        },
        output:{
            items:["exttech-PlastaniumAmmo/2"],
        },
        craftTime: 90
    },
    {
        input:{
            items:["exttech-NullAmmo/2","surge-alloy/4"],
            power: 2.5
        },
        output:{
            items:["exttech-SurgeAmmo/2"],
        },
        craftTime: 90
    },
],
function Extra(){});
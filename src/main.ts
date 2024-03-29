/// <reference types="@workadventure/iframe-api-typings" />
import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

const worldZones = [
    "new-bark-town",
    "route-29"
];

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)

    WA.room.area.onEnter("WIP").subscribe(() => {
        currentPopup = WA.ui.openPopup("WIPPopup","Work in progress", []);
    })
    WA.room.area.onLeave("WIP").subscribe(closePopup)

    // Manage world map
    worldZones.forEach((z) => {
        const zone = "zones/"+z
        const zoneText = "zones-text/"+z

        WA.room.onLeaveLayer(zone).subscribe(() => WA.room.hideLayer(zoneText))
        WA.room.onEnterLayer(zone).subscribe(() => WA.room.showLayer(zoneText))
    })

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));
    
}).catch(e => console.error(e));

function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

export {};

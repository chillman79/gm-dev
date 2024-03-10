---
title: ds_map_clone
description: 
author: GMScripts
tags: Data_Structures, Maps
source: https://www.gmlscripts.com/script/ds_map_clone
github: https://github.com/gmlscripts/scripts/blob/master/Data_Structures/Maps/ds_map_clone.gml
---

ds_map_clone
============

Clones a map simply to a new copy and returns the created map.

    map = ds_map_create();                  //      resulting map clone:
    map[? "Hello"] = "World";               //      {
    map[? "Goodbye"] = "Cruel World";       //          Hello: "World"
                                            //          Goodbye: "Cruel World"
    clone = ds_map_clone(map);              //      }
    
script: ds_map_clone.gml

contributors: RaniSputnik

---
title: ds_list_select_relative
description: 
author: GMScripts
tags: Data_Structures, Lists
source: https://www.gmlscripts.com/script/ds_list_select_relative
github: https://github.com/gmlscripts/scripts/blob/master/Data_Structures/Lists/ds_list_select_relative.gml
---

ds_list_select_relative
=======================

Returns a value from a list data structure in a position relative
to a given value. If a relative position is beyond exents of list, 
the position is clamped to be within range. If current value isn't
among the choices, the return value is undefined.

    //  list == { "Hello", "Doctor", "Name" }
    val = ds_list_select_relative("Name", -2, list);  //  val == "Hello"
    val = ds_list_select_relative("Name", 2, list);   //  val == "Doctor"

script: ds_list_select_relative.gml

contributors: xot

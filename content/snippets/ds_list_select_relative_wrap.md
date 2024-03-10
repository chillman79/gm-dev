---
title: ds_list_select_relative_wrap
description: 
author: GMScripts
tags: Data_Structures, Lists
source: https://www.gmlscripts.com/script/ds_list_select_relative_wrap
github: https://github.com/gmlscripts/scripts/blob/master/Data_Structures/Lists/ds_list_select_relative_wrap.gml
---

ds_list_select_relative_wrap
============================

Returns a value from a list data structure in a position relative 
to a given value. If a relative position is beyond extents of the
list, the position is wrapped around until it is within range. If
current value isn't among the choices, return value is undefined.

    //  list == { "Hello", "Doctor", "Name" }
    val = ds_list_select_relative_wrap("Name", -2, list);  //  val == "Hello"
    val = ds_list_select_relative_wrap("Name", 2, list);   //  val == "Doctor"

script: ds_list_select_relative_wrap.gml

contributors: xot

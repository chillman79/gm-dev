---
title: buffer_set_surface_fix
description: Makes GameMaker:Studio's buffer_set_surface work on all machines
author: YAL-GameMaker
github: https://github.com/YAL-GameMaker/buffer_set_surface_fix
tags: buffer_set_surface_fix
---
# buffer_set_surface_fix

**Quick links:** [itch.io](https://yellowafterlife.itch.io/buffer-set-surface-fix)
  · [explanation](https://yal.cc/buffer_set_surface_fix)  
**Versions**: GameMakerStudio 1.4.1773 .. 1.4.9999  
**Platforms**: Windows, Windows (YYC)

This extension fixes the `buffer_set_surface` function in GameMakerStudio by providing a fallback implementation
if the original function doesn't work.

## How to use

Import the GMEZ file from itch
(right-click on the Extensions folder in the resource tree, pick "Import extension")
_or_ Download Repository and check out the example project.

You don't have to replace any function calls - the extension will redirect calls to the original
function automatically.

## API

The extension also provides one function and one variable.

- **buffer_set_surface_detect()**  
  This function detects whether the original `buffer_set_surface` function
  works correctly and sets `buffer_set_surface_uses_fallback` accordingly.
  
  It will be automatically ran when calling `buffer_set_surface` for the first time,
  but you can also run it yourself if you need to know whether the fallback
  function is going to be used without calling `buffer_set_surface`.
- **buffer_set_surface_uses_fallback**  
  This global variable indicates whether the fallback function is being used.
  
  It is `true` if it is, `false` if it isn't,
  and `undefined` if neither `buffer_set_surface` nor `buffer_set_surface_detect`
  have been called yet.

## Building

See [BUILD.md] 

## Meta

**Author:** [YellowAfterlife](https://github.com/YellowAfterlife)  
**License:** MIT
    
---
title: vigenere_ascii
description: 
author: GMScripts
tags: Computation, Data_Encryption
source: https://www.gmlscripts.com/script/vigenere_ascii
github: https://github.com/gmlscripts/scripts/blob/master/Computation/Data_Encryption/vigenere_ascii.gml
---

vigenere_ascii
==============

This is based on the classic Vigenère cipher. Using a repeating key, the 
letters in the target text are shifted in the alphabet by varying amounts. 
While effective, this is not a strong encryption. A determined person would
likely be able to crack it. The cipher becomes more effective as the length
of the key increases. The biggest weakness with Vigenère ciphers is in cases 
where many spaces or zero-value characters exist in the source data. When 
that happens the enciphering key can be exposed. Using long keys which appear 
random can help hide the exposure.

    G  A  M  E  M  A  K  E  R        7  1 13  5 13  1 11  5 18
    K  E  Y  K  E  Y  K  E  Y       11  5 25 11  5 25 11  5 25
    -  -  -  -  -  -  -  -  -       -- -- -- -- -- -- -- -- --
    R  F  L  P  R  Z  V  J  Q       18  6 12 16 18 26 22 10 17

script: vigenere_ascii.gml

contributors: xot

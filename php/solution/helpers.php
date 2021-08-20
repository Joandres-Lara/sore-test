<?php

$_ACCESSIBLE_GLOBAL_INT = 0;

if(!function_exists('sumOrMultiply')){
 function sumOrMultiply($arr){
     if(sizeof($arr) >= 5){
         return array_sum($arr);
     }else{
         return array_product($arr);
     }
 }
}

if(!function_exists('setAccessibleGlobalInt')){
 function setAccesibleGlobalInt($value){
     global $_ACCESSIBLE_GLOBAL_INT;
     return $_ACCESSIBLE_GLOBAL_INT = $value;
 }
}

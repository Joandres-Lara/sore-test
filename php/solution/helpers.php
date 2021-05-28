<?php

if(!function_exists('sumOrMultiply')){
 /**
  *
  */
 function sumOrMultiply(array $values){
  return count($values) >= 5 ? (
   array_reduce($values, function($first, $curr){ return $first + $curr; })
  ) : (
   array_reduce($values, function($first, $curr){ return $first*$curr;  }, 1)
  );
 }
}

global $_ACCESSIBLE_GLOBAL_INT;
$_ACCESSIBLE_GLOBAL_INT = 5;

if(!function_exists('setAccessibleGlobalInt')){
 /**
  *
  */
 function setAccesibleGlobalInt($newValue){
  global $_ACCESSIBLE_GLOBAL_INT;
  $_ACCESSIBLE_GLOBAL_INT = $newValue;
 }
}

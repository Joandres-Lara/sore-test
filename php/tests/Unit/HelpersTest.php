<?php

namespace Test\Unit;

use PHPUnit\Framework\TestCase;

class HelpersTests extends TestCase{
 /**
  *
  * @return void
  */
 public function testSumOrMultiplyFunction(){
  $this->assertSame(10, sumOrMultiply([5, 2]));
  $this->assertSame(10, sumOrMultiply([5, 1, 1, 1, 1, 1]));
 }

 public function testSetAccessibleGlobalInt(){
  global $_ACCESSIBLE_GLOBAL_INT;
  $this->assertNull($_ACCESSIBLE_GLOBAL_INT);
  setAccesibleGlobalInt(M_PI);
  $this->assertSame($_ACCESSIBLE_GLOBAL_INT, M_PI);
 }
}

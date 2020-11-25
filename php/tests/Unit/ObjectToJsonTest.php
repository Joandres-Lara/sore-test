<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;
use Solution\Classes\ObjectToJson;

class ObjectToJsonTest extends TestCase{
 /**
  *
  * @return void
  */
 public function testShouldConvertToJson(){
  $this->assertJsonStringEqualsJsonString('{"key": "value"}',(new ObjectToJson(['key' => 'value']))->toJson());
 }
}

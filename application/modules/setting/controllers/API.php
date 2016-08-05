<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Investing extends XY_Controller {


	public function index()
	{
		$this->layout->view('investing/list');
	}
}

<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends XY_Controller {


	public function index()
	{
		$this->layout->view('common/dashboard');
	}
}

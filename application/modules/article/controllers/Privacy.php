<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Recycling extends XY_Controller {


    public function index()
    {
        $this->layout->view('recycling/list');
    }
}

<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Recycling extends XY_Controller {


    public function index()
    {
        $this->layout->add_includes(array(
            array('type'=>'css','src'=>_ASSET_.'adminlte/plugins/datatables/dataTables.bootstrap.css'),
            array('type'=>'js','src'=>_ASSET_.'adminlte/plugins/datatables/jquery.dataTables.min.js'),
            array('type'=>'js','src'=>_ASSET_.'adminlte/plugins/datatables/dataTables.bootstrap.min.js'),
        ));
        $this->layout->view('recycling/list');
    }
}

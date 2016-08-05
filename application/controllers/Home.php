<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends XY_Controller {


	public function index()
	{

		$this->layout->add_includes(array(
			//iCheck
			array('type'=>'css','src'=>_ASSET_.'adminlte/plugins/iCheck/flat/blue.css'),
			//Morris chart
			array('type'=>'css','src'=>_ASSET_.'adminlte/plugins/morris/morris.css'),
			//jvectormap
			//array('type'=>'css','src'=>_ASSET_.'adminlte/plugins/jvectormap/jquery-jvectormap-1.2.2.css'),
			// Date Picker
			array('type'=>'css','src'=>_ASSET_.'adminlte/plugins/datepicker/datepicker3.css'),
			// Daterange picker
			array('type'=>'css','src'=>_ASSET_.'adminlte/plugins/daterangepicker/daterangepicker.css'),
			// bootstrap wysihtml5
			array('type'=>'css','src'=>_ASSET_.'adminlte/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css'),

			//Morris.js charts
			array('type'=>'js','src'=>'https://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js','preurl'=>false),
			array('type'=>'js','src'=>_ASSET_.'adminlte/plugins/morris/morris.min.js'),
			//Sparkline
			array('type'=>'js','src'=>_ASSET_.'adminlte/plugins/sparkline/jquery.sparkline.min.js'),
			//jvectormap
			//array('type'=>'js','src'=>_ASSET_.'adminlte/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js'),
			//array('type'=>'js','src'=>_ASSET_.'adminlte/plugins/jvectormap/jquery-jvectormap-world-mill-en.js'),
			//jQuery Knob Chart
			array('type'=>'js','src'=>_ASSET_.'adminlte/plugins/knob/jquery.knob.js'),
			//daterangepicker
			array('type'=>'js','src'=>_ASSET_.'adminlte/dist/js/moment.min.js'),
			array('type'=>'js','src'=>_ASSET_.'adminlte/plugins/daterangepicker/daterangepicker.js'),
			//datepicker
			array('type'=>'js','src'=>_ASSET_.'adminlte/plugins/datepicker/bootstrap-datepicker.js'),
			//Bootstrap WYSIHTML5
			array('type'=>'js','src'=>_ASSET_.'adminlte/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js'),

			//FastClick
			array('type'=>'js','src'=>_ASSET_.'adminlte/plugins/fastclick/fastclick.js'),
			array('type'=>'js','src'=>_ASSET_.'adminlte/dist/js/pages/dashboard.js'),
		));
		$this->layout->view('common/dashboard');
	}
}

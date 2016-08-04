<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class XY_Controller extends CI_Controller {
    protected $tpl_data = array();
    protected $worker;

    function __construct(){
        parent::__construct();
        $this->tpl_data['cdn_server'] = base_url();
        $this->load->driver('cache', array('adapter' => 'file'));
        $this->load->library(array('Ion_auth','Layout'));
        if($this->ion_auth->get_user_id()){
            // 登录用户信息
            $this->layout->set_layout('main');
            $this->layout->add_includes($this->load_files());
            $this->layout->set_title('信研黄金-线下黄金交易平台');
            $this->layout->add_tpl('navbar','common/navbar',$this->navbar());
            $this->layout->add_tpl('sidebar','common/sidebar',$this->sidebar());
            $this->layout->add_tpl('controlbar','common/controlbar',$this->controlbar());

            $this->load->vars(array('worker' => $this->ion_auth->get_info()));

        }else{
            // 跳转到登录页面
            redirect('login','refresh');
        }
    }

    function index(){
        $this->load->view('login', $this->tpl_data);
    }

    private function load_files()
    {
        return array(
            
                array('type'=>'css','src'=>_ASSET_.'adminlte/bootstrap/css/bootstrap.min.css'),
                array('type'=>'css','src'=>_ASSET_.'adminlte/dist/css/AdminLTE.min.css'),
                array('type'=>'css','src'=>_ASSET_.'font-awesome/css/font-awesome.min.css'),
                array('type'=>'css','src'=>_ASSET_.'ionicons/css/ionicons.min.css'),
                array('type'=>'css','src'=>_ASSET_.'adminlte/dist/css/AdminLTE.min.css'),
                array('type'=>'css','src'=>_ASSET_.'adminlte/dist/css/skins/_all-skins.min.css'),
                //iCheck
                array('type'=>'css','src'=>_ASSET_.'adminlte/plugins/iCheck/flat/blue.css'),
                //Morris chart
                array('type'=>'css','src'=>_ASSET_.'adminlte/plugins/morris/morris.css'),
                //jvectormap
                array('type'=>'css','src'=>_ASSET_.'adminlte/plugins/jvectormap/jquery-jvectormap-1.2.2.css'),
                // Date Picker
                array('type'=>'css','src'=>_ASSET_.'adminlte/plugins/datepicker/datepicker3.css'),
                // Daterange picker
                array('type'=>'css','src'=>_ASSET_.'adminlte/plugins/daterangepicker/daterangepicker.css'),
                // bootstrap wysihtml5
                array('type'=>'css','src'=>_ASSET_.'adminlte/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css'),

                //jQuery 2.2.3
                array('type'=>'js','src'=>_ASSET_.'adminlte/plugins/jQuery/jquery-2.2.3.min.js'),
                //jQuery UI 1.11.4
                array('type'=>'js','src'=>_ASSET_.'jquery-ui/jquery-ui.min.js'),
                // Bootstrap 3.3.6
                array('type'=>'js','src'=>_ASSET_.'adminlte/bootstrap/js/bootstrap.min.js'),
                //Morris.js charts
                //array('type'=>'js','src'=>'https://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js','preurl'=>false),
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
                //Slimscroll
                array('type'=>'js','src'=>_ASSET_.'adminlte/plugins/slimScroll/jquery.slimscroll.min.js'),
                //FastClick
                array('type'=>'js','src'=>_ASSET_.'adminlte/plugins/fastclick/fastclick.js'),
            
        );

    }

    private function navbar()
    {
        return [];
    }

    private function sidebar()
    {
        return [];
    }

    private function controlbar()
    {
        return [];
    }
}
<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class XY_Controller extends MX_Controller {
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


                //jvectormap
                //array('type'=>'css','src'=>_ASSET_.'adminlte/plugins/jvectormap/jquery-jvectormap-1.2.2.css'),


                //jQuery 2.2.3
                array('type'=>'js','src'=>_ASSET_.'adminlte/plugins/jQuery/jquery-2.2.3.min.js'),
                //jQuery UI 1.11.4
                array('type'=>'js','src'=>_ASSET_.'jquery-ui/jquery-ui.min.js'),
                // Bootstrap 3.3.6
                array('type'=>'js','src'=>_ASSET_.'adminlte/bootstrap/js/bootstrap.min.js'),

                //jvectormap
                //array('type'=>'js','src'=>_ASSET_.'adminlte/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js'),
                //array('type'=>'js','src'=>_ASSET_.'adminlte/plugins/jvectormap/jquery-jvectormap-world-mill-en.js'),


                //Slimscroll
                array('type'=>'js','src'=>_ASSET_.'adminlte/plugins/slimScroll/jquery.slimscroll.min.js'),
                array('type'=>'js','src'=>_ASSET_.'adminlte/dist/js/app.min.js'),
                array('type'=>'js','src'=>_ASSET_.'adminlte/dist/js/demo.js'),

            
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
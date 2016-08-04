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
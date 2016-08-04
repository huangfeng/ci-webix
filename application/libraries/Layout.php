<?php

/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/7/20 0020
 * Time: 17:54
 */

class Layout {

    private $ci;

    // the title for the layout
    private $title;

    // title separator
    // you can change this in the construct
    public $title_separator;

    // holds the css and js files
    private $includes;
    private $layout_tpl = NULL;
    private $extends = array();

    public function __construct() {

        $this->ci = &get_instance();

        $this->title = NULL;
        $this->title_separator = '  ';

        $this->includes = array();

    }

    public function set_layout($layout)
    {
        $this->layout_tpl = $layout;
    }

    public function set_title($title = NULL) {

        $this->title = $title;

    }

    public function add_tpl($name='',$tpl='common/top',$data=array())
    {
        $this->extends[$name] = $this->ci->load->view($tpl, $data, TRUE);
    }

    public function add_includes($type, $file, $options = NULL, $prepend_base_url = TRUE) {

        if($prepend_base_url) {

            $this->ci->load->helper('url');
            $file = base_url() . $file;

        }

        $this->includes[$type][] = array(

            'file' => $file,
            'options' => $options

        );

        // allows chaining
        return $this;

    }

    public function view($name, $data = array(), $layout = 'main') {

        // get the contents of the view and store it

        if($layout === false) {
            die($this->ci->load->view($name, $data, TRUE));
        }

        $view = $this->ci->load->view($name, $data, TRUE);

        if(!$this->layout_tpl){
            $this->layout_tpl = $layout;
        }
        // set the title
        $title = '';

        if($this->title !== NULL) {

            $title = $this->title . $this->title_separator;

        }

        $this->ci->load->view('layouts/' . $this->layout_tpl, array(

            'title' => $title,
            'includes' => $this->includes,
            'content' => $view

        )+$this->extends);

    }

}

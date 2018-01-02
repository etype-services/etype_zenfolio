<?php
/**
 * Created by PhpStorm.
 * User: charlie
 * Date: 11/11/17
 */

/**
 * Zenfolio settings
 * @param $form_state
 * @return array
 */
function etype_zenfolio_admin_form($form, &$form_state) {

  $form = [];

  $form['etype_zenfolio_username'] = [
    '#title' => t('Zenfolio User Name'),
    '#type' => 'textfield',
    '#default_value' => variable_get('etype_zenfolio_username'),
  ];

  $form['etype_zenfolio_password'] = [
    '#title' => t('Zenfolio Password'),
    '#type' => 'textfield',
    '#default_value' => variable_get('etype_zenfolio_password'),
  ];

  $form['etype_zenfolio_display'] = [
    '#title' => t('Display options'),
    '#type' => 'radios',
    '#options' => [
      'slideshow' => t('Slideshow'),
      'thumbs' => t('Thumbnails'),
    ],
    '#default_value' => variable_get('etype_zenfolio_display'),
  ];

  return system_settings_form($form);

}
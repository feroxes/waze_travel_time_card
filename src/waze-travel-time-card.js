import { LitElement, html } from 'lit-element';
// import { hasConfigOrEntityChanged } from 'custom-card-helpers';
import Constants from "./helpers/constants.js";

import localize from './localize';
// import styles from './styles';

if (!customElements.get('ha-icon-button')) {
  customElements.define(
    'ha-icon-button',
    class extends customElements.get('paper-icon-button') {}
  );
}

class WazeTravelTimeCard extends LitElement {
  static get properties() {
    return {
      hass: Object,
      config: Object,
    };
  }

  // static get styles() {
  //   return styles;
  // }

  // static async getConfigElement() {
  //   return document.createElement('waze_travel_time-card-editor');
  // }

  static getStubConfig(hass, entities) {
    const [wazeTravelTimeEntity] = entities.filter(
      (eid) => eid.substr(0, eid.indexOf('.')) === Constants.entities.sensor
    );
    return {
      entity: wazeTravelTimeEntity || ''
    };
  }

  get entity() {
    return this.hass.states[this.config.entity];
  }

  setConfig(config) {
    if (!config.entity) {
      throw new Error(localize('error.missing_entity'));
    }
    this.config = config;
  }

  getCardSize() {
    return Constants.cardSize;
  }

  // shouldUpdate(changedProps) {
  //   return hasConfigOrEntityChanged(this, changedProps);
  // }

  render() {
    return html`
      <div>Hi!</div>
    `
  }
}

customElements.define(Constants.componentName, WazeTravelTimeCard);

window.customCards = window.customCards || [];
window.customCards.push({
  preview: true,
  type: Constants.componentName,
  name: localize('common.name'),
  description: localize('common.description'),
});

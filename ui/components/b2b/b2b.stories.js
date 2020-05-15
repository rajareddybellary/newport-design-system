import { storiesOf } from "@storybook/html";
import base from "paths.macro";
import notes from "./doc.md";
import {
  withExample,
  withDocs,
  commentToHTML
} from "../../../scripts/storybook";
storiesOf(`${base}`, module)
  .addDecorator(withDocs(notes))
  .add("b2bCategoriesList", () => {
    return withExample(`
    <div class="nds-b2b-categories-list">
      <nav class="nds-b2b-categories-list_nav" role="navigation">
        <ul class="nds-b2b-categories-list_nav-list">
          <c-b2b-category-item>
            <li>
              <input id="group-1" type="checkbox" hidden />
              <label for="group-1" class="nds-b2b-category-name nds-b2b-category-name_label">
                <c-icon theme="nds" icon-name="utility:rows" size="small" extraclass="nds-icon-text-default" class="nds-b2b-category-icon">
                  <span class="nds-icon_container nds-icon-utility-phone_portrait">
                    <svg class="nds-icon nds-icon-text-default nds-icon_x-small" aria-hidden="true">
                      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#phone_portrait"></use>
                    </svg>
                  </span>
                </c-icon>
                Ethernet
                <span class="nds-b2b-switch-icon">
                  <svg class="nds-accordion__summary-action-icon nds-button__icon nds-button__icon_left" aria-hidden="true">
                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
                  </svg>
                </span>
              </label>
              <ul class="nds-b2b-category_group-list">
                <li class="nds-b2b-category-name">E-LAN</li>
                <li class="nds-b2b-category-name">Cloud</li>
                <li class="nds-b2b-category-name">Point to Point</li>
                <c-b2b-category-item>
                  <li>
                    <input id="sub-group-1" type="checkbox" hidden />
                    <label for="sub-group-1" class="nds-b2b-category-name"> Sub Child Categories 
                      <span class="nds-b2b-switch-icon">
                        <svg class="nds-accordion__summary-action-icon nds-button__icon nds-button__icon_left" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
                        </svg>
                      </span> 
                    </label>
                    <ul class="nds-b2b-category_group-list">
                      <li class="nds-b2b-category-name">one</li>
                      <li class="nds-b2b-category-name">two</li>
                      <li class="nds-b2b-category-name">three</li>
                    </ul>
                  </li>
                </c-b2b-category-item>
              </ul>
            </li>
            <li>
              <input id="group-2" type="checkbox" hidden />
              <label for="group-2" class="nds-b2b-category-name nds-b2b-category-name_label">
                <c-icon theme="nds" icon-name="utility:rows" size="small" extraclass="nds-icon-text-default" class="nds-b2b-category-icon">
                  <span class="nds-icon_container nds-icon-utility-phone_portrait">
                    <svg class="nds-icon nds-icon-text-default nds-icon_x-small" aria-hidden="true">
                      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#phone_portrait"></use>
                    </svg>
                  </span>
                </c-icon>
                Accessories
                <span class="nds-b2b-switch-icon">
                  <svg class="nds-accordion__summary-action-icon nds-button__icon nds-button__icon_left" aria-hidden="true">
                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
                  </svg>
                </span>
              </label>
              <ul class="nds-b2b-category_group-list">
                <li class="nds-b2b-category-name">E-LAN</li>
                <li class="nds-b2b-category-name">Cloud</li>
                <li class="nds-b2b-category-name">Point to Point</li>
              </ul>
            </li>
            <li>
              <input id="group-3" type="checkbox" hidden />
              <label for="group-3" class="nds-b2b-category-name nds-b2b-category-name_label">
                <c-icon theme="nds" icon-name="utility:rows" size="small" extraclass="nds-icon-text-default" class="nds-b2b-category-icon">
                  <span class="nds-icon_container nds-icon-utility-phone_portrait">
                    <svg class="nds-icon nds-icon-text-default nds-icon_x-small" aria-hidden="true">
                      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#phone_portrait"></use>
                    </svg>
                  </span>
                </c-icon>
                Plans & Services
                <span class="nds-b2b-switch-icon">
                  <svg class="nds-accordion__summary-action-icon nds-button__icon nds-button__icon_left" aria-hidden="true">
                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
                  </svg>
                </span>
              </label>
              <ul class="nds-b2b-category_group-list">
                <li class="nds-b2b-category-name">E-LAN</li>
                <li class="nds-b2b-category-name">Cloud</li>
                <li class="nds-b2b-category-name">Point to Point</li>
              </ul>
            </li>
          </c-b2b-category-item>
        </ul>
      </nav>
    </div>`);
  })
  .add("b2bPromoItem", () => {
    return withExample(`
    <div class="nds-b2b-promo-item">
      <div class="nds-b2b-promo-name">
        <c-icon theme="nds" icon-name="utility:rows" size="small" extraclass="nds-icon-text-default" class="nds-b2b-promo-icon">
          <span class="nds-icon_container nds-icon-utility-wifi">
            <svg class="nds-icon nds-icon-text-default nds-icon_x-small" xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52">
              <path fill="#1589ee" d="m47.7 15.8c-5.5-6.1-13.3-9.5-21.6-9.5s-16.1 3.4-21.6 9.5c-0.4 0.4-0.3 1.1 0.1 1.4l3 2.6c0.4 0.4 1 0.3 1.4-0.1 4.4-4.7 10.6-7.4 17.1-7.4s12.7 2.7 17.1 7.4c0.4 0.4 1 0.4 1.4 0.1l3-2.6c0.4-0.4 0.5-1 0.1-1.4z m-21.6 4.5c-4.2 0-8.2 1.8-11 5-0.4 0.4-0.3 1.1 0.1 1.5l3.2 2.4c0.4 0.3 1 0.3 1.3-0.1 1.7-1.8 4-2.8 6.4-2.8s4.7 1 6.3 2.7c0.3 0.4 0.9 0.4 1.3 0.1l3.2-2.4c0.5-0.4 0.5-1 0.1-1.5-2.7-3.1-6.7-4.9-10.9-4.9z m0.1 13.9c2.7 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.3-5 5-5z"></path>
            </svg>
          </span>
        </c-icon>
        WAN Promotion Name 
      </div>
      <div class="nds-b2b-promo-description">A short description of how best to use this product and what it includes.Lorem ipsum dolar sit amet, consectetur, adipisci velit5</div>
      <div class="nds-b2b-promo-period">Offer ends 2/29/20</div>
    </div>`);
  })
  .add("b2bProductItem", () => {
    return withExample(`
    <div class="nds-b2b-product-item">
      <div class="nds-b2b-product-item_container">
        <div class="nds-b2b-product-name">
          <c-icon theme="nds" icon-name="utility:rows" size="small" extraclass="nds-icon-text-default" class="nds-b2b-product-icon">
            <span class="nds-icon_container nds-icon-utility-wifi">
              <svg class="nds-icon nds-icon-text-default nds-icon_x-small" xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52">
                <path fill="#1589ee" d="m47.7 15.8c-5.5-6.1-13.3-9.5-21.6-9.5s-16.1 3.4-21.6 9.5c-0.4 0.4-0.3 1.1 0.1 1.4l3 2.6c0.4 0.4 1 0.3 1.4-0.1 4.4-4.7 10.6-7.4 17.1-7.4s12.7 2.7 17.1 7.4c0.4 0.4 1 0.4 1.4 0.1l3-2.6c0.4-0.4 0.5-1 0.1-1.4z m-21.6 4.5c-4.2 0-8.2 1.8-11 5-0.4 0.4-0.3 1.1 0.1 1.5l3.2 2.4c0.4 0.3 1 0.3 1.3-0.1 1.7-1.8 4-2.8 6.4-2.8s4.7 1 6.3 2.7c0.3 0.4 0.9 0.4 1.3 0.1l3.2-2.4c0.5-0.4 0.5-1 0.1-1.5-2.7-3.1-6.7-4.9-10.9-4.9z m0.1 13.9c2.7 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.3-5 5-5z"></path>
              </svg>
            </span>
          </c-icon>
          Recommended Ethernet Product Name 
        </div>
        <div class="nds-b2b-product-description">A short description of how best to use this product and what it includes.Lorem ipsum dolar sit amet, consectetur, adipisci velit5</div>
        <div class="nds-b2b-product-badge_container">
          <span class="nds-badge nds-b2b-product-badge">Family Owned</span>
          <span class="nds-badge nds-b2b-product-badge">Small Business</span>
        </div>
        <div class="nds-b2b-product_price-range">$6,600 - $6,945</div>
      </div>
    </div>`);
  })
  .add("b2bItemsGrid", () => {
    return withExample(`
    <div class="nds-b2b-items-grid">
        <div class="nds-b2b-items-grid_title">
          <slot name="title">Recommended Products</slot>
        </div>
        <div class="nds-b2b-items-grid_container">
          <slot name="items">
            <div class="nds-b2b-product-item">
              <div class="nds-b2b-product-item_container">
                <div class="nds-b2b-product-name">
                  <c-icon theme="nds" icon-name="utility:rows" size="small" extraclass="nds-icon-text-default" class="nds-b2b-product-icon">
                    <span class="nds-icon_container nds-icon-utility-wifi">
                      <svg class="nds-icon nds-icon-text-default nds-icon_x-small" xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52">
                        <path fill="#1589ee" d="m47.7 15.8c-5.5-6.1-13.3-9.5-21.6-9.5s-16.1 3.4-21.6 9.5c-0.4 0.4-0.3 1.1 0.1 1.4l3 2.6c0.4 0.4 1 0.3 1.4-0.1 4.4-4.7 10.6-7.4 17.1-7.4s12.7 2.7 17.1 7.4c0.4 0.4 1 0.4 1.4 0.1l3-2.6c0.4-0.4 0.5-1 0.1-1.4z m-21.6 4.5c-4.2 0-8.2 1.8-11 5-0.4 0.4-0.3 1.1 0.1 1.5l3.2 2.4c0.4 0.3 1 0.3 1.3-0.1 1.7-1.8 4-2.8 6.4-2.8s4.7 1 6.3 2.7c0.3 0.4 0.9 0.4 1.3 0.1l3.2-2.4c0.5-0.4 0.5-1 0.1-1.5-2.7-3.1-6.7-4.9-10.9-4.9z m0.1 13.9c2.7 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.3-5 5-5z"></path>
                      </svg>
                    </span>
                  </c-icon>
                  Recommended Ethernet Product Name 
                </div>
                <div class="nds-b2b-product-description">A short description of how best to use this product and what it includes.Lorem ipsum dolar sit amet, consectetur, adipisci velit5</div>
                <div class="nds-b2b-product-badge_container">
                  <span class="nds-badge nds-b2b-product-badge">Family Owned</span>
                  <span class="nds-badge nds-b2b-product-badge">Small Business</span>
                </div>
                <div class="nds-b2b-product_price-range">$6,600 - $6,945</div>
              </div>
            </div>

            <div class="nds-b2b-product-item">
              <div class="nds-b2b-product-item_container">
                <div class="nds-b2b-product-name">
                  <c-icon theme="nds" icon-name="utility:rows" size="small" extraclass="nds-icon-text-default" class="nds-b2b-product-icon">
                    <span class="nds-icon_container nds-icon-utility-wifi">
                      <svg class="nds-icon nds-icon-text-default nds-icon_x-small" xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52">
                        <path fill="#1589ee" d="m47.7 15.8c-5.5-6.1-13.3-9.5-21.6-9.5s-16.1 3.4-21.6 9.5c-0.4 0.4-0.3 1.1 0.1 1.4l3 2.6c0.4 0.4 1 0.3 1.4-0.1 4.4-4.7 10.6-7.4 17.1-7.4s12.7 2.7 17.1 7.4c0.4 0.4 1 0.4 1.4 0.1l3-2.6c0.4-0.4 0.5-1 0.1-1.4z m-21.6 4.5c-4.2 0-8.2 1.8-11 5-0.4 0.4-0.3 1.1 0.1 1.5l3.2 2.4c0.4 0.3 1 0.3 1.3-0.1 1.7-1.8 4-2.8 6.4-2.8s4.7 1 6.3 2.7c0.3 0.4 0.9 0.4 1.3 0.1l3.2-2.4c0.5-0.4 0.5-1 0.1-1.5-2.7-3.1-6.7-4.9-10.9-4.9z m0.1 13.9c2.7 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.3-5 5-5z"></path>
                      </svg>
                    </span>
                  </c-icon>
                  Recommended Ethernet Product Name 
                </div>
                <div class="nds-b2b-product-description">A short description of how best to use this product and what it includes.Lorem ipsum dolar sit amet, consectetur, adipisci velit5</div>
                <div class="nds-b2b-product-badge_container">
                  <span class="nds-badge nds-b2b-product-badge">Family Owned</span>
                  <span class="nds-badge nds-b2b-product-badge">Small Business</span>
                </div>
                <div class="nds-b2b-product_price-range">$6,600 - $6,945</div>
              </div>
            </div>
          </slot>
        </div>
    </div>`);
  })
  .add("b2bCartSummary", () => {
    return withExample(`
    <div class="nds-p-horizontal_medium nds-border_bottom nds-is-relative">
    <div class="nds-grid nds-wrap nds-grid_pull-padded-small nds-grid_vertical-align-center">
      <div class="nds-p-around_small nds-size_12-of-12 nds-large-size_6-of-12">
        <div class="nds-grid">
          <c-icon theme="nds" icon-name="standard:quotes" size="large" bg-color="rgb(60,138,231)" variant="inverse" extraclass="nds-icon_container">
            <svg class="nds-icon nds-icon_container nds-icon-text-inverse nds-icon_large" style="background-color: rgb(60, 138, 231);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M17.3 5.3H12c-.3 0-.6.1-.8.4l-6.5 6.4c-.5.6-.5 1.5 0 2.1l5.1 5c.6.6 1.5.6 2.1 0l6.5-6.5c.2-.2.3-.6.3-.9V6.7c0-.8-.6-1.4-1.4-1.4zm-5.2 10.5l-.3.4c-.2.2-.5.2-.7 0l-3.3-3.3c-.2-.2-.2-.5 0-.7l.4-.3c.2-.2.4-.2.6 0l3.3 3.3c.2.2.2.4 0 .6zm1.9-1.9l-.3.4c-.2.1-.5.1-.7 0L9.7 11c-.1-.2-.1-.5 0-.7l.4-.3c.2-.2.5-.2.7 0l3.2 3.2c.2.2.2.5 0 .7zm1.4-4.1c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2 1.2.6 1.2 1.2-.6 1.2-1.2 1.2z"></path>
            </svg>
          </c-icon>
          <div class="nds-p-left_medium nds-grow">
            <div class="nds-grid nds-wrap nds-b2b-stretch-y">
              <div class="nds-size_4-of-4 nds-large-size_3-of-4 nds-text-color_weak nds-p-bottom_x-small">
                <div class="nds-grid nds-b2b-dropdown_trigger" tabindex="-1" onclick={toggleList}>
                  <span class="nds-truncate nds-p-right_xx-small" style="max-width: 260px;">Bread & Butter | 2019</span>
                  <c-icon theme="nds" icon-name="utility:chevrondown" size="xx-small"> 
                    <svg xmlns="http://www.w3.org/2000/svg" class="nds-icon nds-icon-text-default nds-icon_xx-small" viewBox="0 0 24 24">
                      <path d="M22 8.2l-9.5 9.6c-.3.2-.7.2-1 0L2 8.2c-.2-.3-.2-.7 0-1l1-1c.3-.3.8-.3 1.1 0l7.4 7.5c.3.3.7.3 1 0l7.4-7.5c.3-.2.8-.2 1.1 0l1 1c.2.3.2.7 0 1z"></path>
                    </svg>
                  </c-icon>
                  <ul class="nds-b2b-dropdown nds-m-top_xx-small">
                      <li class="nds-b2b-dropdown_item">Item 1</li>
                      <li class="nds-b2b-dropdown_item">Item 2</li>
                      <li class="nds-b2b-dropdown_item">Item 3</li>
                  </ul>
                </div>
              </div>
              <div class="nds-size_4-of-4 nds-large-size_1-of-4 nds-align-middle">
                <div class="nds-grid nds-grid_vertical-align-center nds-grid_align-end">
                  <div class="nds-p-right_x-large nds-b2b-pipe">
                    <span class="nds-b2b-badge">Estimate</span>
                  </div>
                  <div class="nds-b2b-cart-actions nds-col_bump-left">
                    <slot name="action">
                      <div class="nds-grid nds-grid_vertical-align-center">
                      <div class="nds-large-order_1 nds-m-left_medium">
                        <c-b2b-button theme="nds" variant="neutral" label="Add" icon-name="utility:add" icon-size="x-small" hide-label="below:large">
                          <button type="button" class="vlocity-btn nds-button nds-button_brand nds-b2b-button">
                            <span class="nds-hide_large nds-b2b-icon_large-adj-below">
                              <vlocity_cmt-icon>
                                <svg aria-hidden="true" class="nds-b2b-button_icon nds-icon_x-small" style="fill: rgb(255, 255, 255);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.5 8.8h-5.2c-1.2 0-1.9-.8-1.9-2V1.7c0-.5-.3-.8-.8-.8H5c-1.2 0-2.2 1-2.2 2.2v17.8c0 1.2 1 2.2 2.2 2.2h14c1.2 0 2.2-1 2.2-2.2V9.5c0-.4-.3-.7-.7-.7zm.6-2.8l-4.9-4.9c-.1-.1-.3-.2-.4-.2-.3 0-.6.3-.6.5v4c0 .8.8 1.5 1.6 1.5h3.9c.3 0 .5-.3.5-.5s0-.4-.1-.4z"></path></svg>
                                <span class="nds-assistive-text"></span>
                              </vlocity_cmt-icon>
                            </span>
                            <span class="nds-show_large">Preview</span>
                          </button>
                        </c-b2b-button> 
                      </div>
                        <div class="nds-m-left_medium">
                          <c-b2b-button theme="nds" variant="brand" icon-name="utility:page" icon-size="x-small" label="Preview" icon-fill="#fff" hide-label="below:large" hide-icon="above:large">
                            <button type="button" class="vlocity-btn nds-button nds-button_neutral nds-b2b-button">
                              <span class="nds-b2b-icon_large-adj-below">
                                <vlocity_cmt-icon>
                                  <svg aria-hidden="true" class="nds-b2b-button_icon nds-icon_x-small" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.8 13.4h7.7c.3 0 .7-.3.7-.7v-1.4c0-.4-.4-.7-.7-.7h-7.7c-.2 0-.4-.2-.4-.4V2.5c0-.3-.3-.7-.7-.7h-1.4c-.4 0-.7.4-.7.7v7.7c0 .2-.2.4-.4.4H2.5c-.3 0-.7.3-.7.7v1.4c0 .4.4.7.7.7h7.7c.2 0 .4.2.4.4v7.7c0 .3.3.7.7.7h1.4c.4 0 .7-.4.7-.7v-7.7c0-.2.2-.4.4-.4z"></path></svg>
                                </vlocity_cmt-icon>
                              </span>
                              <span class="nds-show_large">Add</span>
                            </button>
                          </c-b2b-button>
                        </div>
                        <div class="nds-large-order_2 nds-m-left_medium">
                          <c-menu theme="nds" icon-name="utility:threedots_vertical" position="right">
                            <svg class="nds-button__icon nds-icon_xx-small" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.2 20.3c0-1.5 1.3-2.8 2.8-2.8s2.8 1.3 2.8 2.8-1.3 2.8-2.8 2.8-2.8-1.3-2.8-2.8zm0-8.3c0-1.5 1.3-2.8 2.8-2.8s2.8 1.3 2.8 2.8-1.3 2.8-2.8 2.8-2.8-1.3-2.8-2.8zm0-8.3C9.2 2.2 10.5.9 12 .9s2.8 1.3 2.8 2.8-1.3 2.8-2.8 2.8-2.8-1.3-2.8-2.8z"></path></svg>
                          </c-menu>
                        </div>
                      </div>
                    </slot>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="nds-p-horizontal_small nds-size_12-of-12 nds-large-size_4-of-12">
        <div class="nds-hide_medium nds-border_top"></div>
        <div class="nds-grid nds-p-vertical_small" if:true={cartData}>
          <div class="nds-size_1-of-3 nds-shrink-none">
            <div class="nds-text-color_weak">One Time Total</div>
            <div>$700.00</div>
          </div>
          <div class="nds-size_1-of-3 nds-shrink-none">
            <div class="nds-text-color_weak">Montly Total</div>
            <div>$500.00</div>
          </div>
          <div class="nds-size_1-of-3 nds-shrink-none nds-b2b-pipe">
            <div class="nds-text-color_weak">Quote Total</div>
            <div>$1899.00</div>
          </div>
        </div>
      </div>
      <div class="nds-b2b-tabs_cont">
        <slot name="tabs">
          <ul class="nds-b2b-tabs">
            <li class="nds-b2b-tab_item nds-b2b-tab_item-active">Product(90)</li>
            <li class="nds-b2b-tab_item">Location(0)</li>
            <li class="nds-b2b-tab_item">Line(0)</li>
          </ul>
        </slot>
      </div>
      <div class="nds-p-around_small nds-show_large nds-large-size_2-of-12"></div>
    </div>
    </div>`);
  })
  .add("b2bFileUpload", () => {
    return withExample(`
    <div class="nds-align_absolute-center nds-b2b-upload_wrapper">
        <div class="nds-color__background_gray-1 nds-size_12-of-12 nds-small-size_10-of-12 nds-large-size_6-of-12 nds-p-around_large">
            <h2 class="nds-b2b-title nds-m-bottom_xx-small">Add Location</h2>
            <div class="nds-b2b-upload_box nds-p-around_large nds-align_absolute-center">
                Drop Files Here
            </div>
            <div class="nds-m-top_medium nds-grid nds-grid_align-end">
                <div class="nds-file-selector nds-file-selector_files nds-m-right_medium">
                    <label class="nds-file-selector__body slds-file-selector__body">
                        <input 
                            class="nds-file-selector__input nds-assistive-text nds-b2b-file-selector" 
                            type="file"
                            accept=".csv, .xlsx, .xls"
                            onchange={readHandler}
                        />
                        <span class="nds-button nds-button_neutral">Add Manually</span>
                    </label>
                </div>
                <button type="button" class="vlocity-btn nds-button nds-button_brand">Choose File</button>
            </div>
        </div>
    </div>`);
  })
  .add("b2bDataTable", () => {
    return withExample(`
    <div class="nds-m-vertical_medium">
      <div class="nds-grid nds-color__background_gray-1 nds-wrap nds-grid_vertical-align-center nds-p-top_small">
          <div class="nds-col nds-size_6-of-12 nds-large-size_3-of-12 nds-p-horizontal_medium nds-p-bottom_small">
              <div class="nds-grid nds-grid_vertical-align-center">  
                  <label class="nds-size_3-of-12 nds-m-right_medium nds-b2b-table_transition-hide">Group by</label> 
                  <div class="nds-b2b-input">
                      <div class="nds-form-element nds-form-container">
                          <div aria-expanded="false" aria-haspopup="listbox" role="combobox" class="nds-combobox nds-dropdown-trigger nds-dropdown-trigger_click">
                              <div class="nds-form-element__control">
                                  <div class="nds-combobox_container">
                                      <div role="none" class="nds-combobox__form-element nds-input-has-icon nds-input-has-icon_right nds-form-element__control nds-form-element__control-animated-label">
                                          <input value="No Group" readonly="" class="nds-input nds-listbox__option-text_entity nds-not-empty nds-is-dirty">
                                          <div class="nds-form-element__label nds-align-middle nds-animated-label__ease-out">
                                              <label></label>
                                          </div>
                                          <span class="nds-icon_container nds-icon-utility-down nds-input__icon nds-input__icon_right">
                                              <svg class="nds-icon nds-icon-text-default nds-icon_x-small" aria-hidden="true">
                                                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                                              </svg>
                                          </span>
                                      </div>
                                  </div>
                                  <div class="nds-form-element">
                                      <div role="listbox" class="nds-dropdown nds-dropdown_fluid nds-p-bottom_none">
                                          <ul role="presentation" class="listbox nds-listbox nds-listbox_vertical">
                                              <li class="nds-listbox__item">
                                                  <div data-value="none" data-label="No Grouping" role="option" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-is-selected">
                                                      <span class="nds-media__body">
                                                          <span class="nds-listbox__option-text nds-listbox__option-text_entity">No Grouping</span>
                                                      </span>
                                                  </div>
                                              </li>
                                              <li class="nds-listbox__item">
                                                  <div data-value="First Name" data-label="First Name" role="option" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-is-selected">
                                                      <span class="nds-media__body">
                                                          <span class="nds-listbox__option-text nds-listbox__option-text_entity">First Name</span>
                                                      </span>
                                                  </div>
                                              </li>
                                              <li class="nds-listbox__item">
                                                  <div data-value="Last Name" data-label="Last Name" role="option" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-is-selected">
                                                      <span class="nds-media__body">
                                                          <span class="nds-listbox__option-text nds-listbox__option-text_entity">Last Name</span>
                                                      </span>
                                                  </div>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="nds-col nds-size_6-of-12 nds-large-size_3-of-12 nds-p-horizontal_medium nds-p-bottom_small">
              <div class="nds-grid nds-grid_vertical-align-center">  
                  <label class="nds-size_3-of-12 nds-m-right_medium nds-b2b-table_transition-hide">Displaying</label> 
                  <div class="nds-b2b-input">
                      <div class="nds-form-element nds-form-container">
                          <div aria-expanded="false" aria-haspopup="listbox" role="combobox" class="nds-combobox nds-dropdown-trigger nds-dropdown-trigger_click">
                              <div class="nds-form-element__control">
                                  <div class="nds-combobox_container">
                                      <div role="none" class="nds-combobox__form-element nds-input-has-icon nds-input-has-icon_right nds-form-element__control nds-form-element__control-animated-label">
                                          <input value="All" readonly="" class="nds-input nds-listbox__option-text_entity nds-not-empty nds-is-dirty">
                                          <div class="nds-form-element__label nds-align-middle nds-animated-label__ease-out">
                                              <label></label>
                                          </div>
                                          <span class="nds-icon_container nds-icon-utility-down nds-input__icon nds-input__icon_right">
                                              <span class="nds-icon_container nds-icon-utility-down nds-input__icon nds-input__icon_right">
                                                  <svg class="nds-icon nds-icon-text-default nds-icon_x-small" aria-hidden="true">
                                                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                                                  </svg>
                                              </span>
                                          </span>
                                      </div>
                                  </div>
                                  <div class="nds-form-element">
                                      <div role="listbox" class="nds-dropdown nds-dropdown_fluid nds-p-bottom_none">
                                          <ul role="presentation" class="listbox nds-listbox nds-listbox_vertical">
                                              <li class="nds-listbox__item">
                                                  <div data-value="none" data-label="All" role="option" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-is-selected">
                                                      <span class="nds-media__body">
                                                          <span class="nds-listbox__option-text nds-listbox__option-text_entity">All</span>
                                                      </span>
                                                  </div>
                                              </li>
                                              <li class="nds-listbox__item">
                                                  <div data-value="First Name" data-label="Primary" role="option" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-is-selected">
                                                      <span class="nds-media__body">
                                                          <span class="nds-listbox__option-text nds-listbox__option-text_entity">Primary</span>
                                                      </span>
                                                  </div>
                                              </li>
                                              <li class="nds-listbox__item">
                                                  <div data-value="Last Name" data-label="Secondary" role="option" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-is-selected">
                                                      <span class="nds-media__body">
                                                          <span class="nds-listbox__option-text nds-listbox__option-text_entity">Secondary</span>
                                                      </span>
                                                  </div>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="nds-size_6-of-12 nds-large-size_3-of-12 nds-p-horizontal_medium nds-text-body_small nds-p-bottom_small">
              <span>Total : 12</span>
              <span class="nds-m-left_medium">Showing : 4</span>
          </div>
         
          <div class="nds-size_6-of-12 nds-large-size_3-of-12 nds-b2b-input nds-p-horizontal_medium nds-p-bottom_small">
              <div class="nds-grid nds-grid_vertical-align-center">  
                <label class=" nds-size_3-of-12 nds-m-right_medium nds-b2b-table_transition-hide">Search</label> 
                <div class="nds-form-element__control nds-input-has-icon nds-input-has-icon_left">
                    <svg class="nds-icon nds-input__icon nds-input__icon_left nds-icon-text-default nds-icon_xx-small" aria-hidden="true">
                        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
                    </svg>
                    <input type="text" class="nds-input" placeholder="search" onkeyup={searchKeyChangeHandler} value="search">
                </div>
              </div>  
          </div>
      </div>
      <div class="nds-is-relative">
          <table class="nds-b2b-table nds-m-top_medium" style="border-collapse:collapse">
              <thead class="nds-b2b-table_head">
                  <tr class="nds-line-height_reset nds-b2b-table_row nds-b2b-table_head-row">
                      <th class="nds-b2b-table_cell nds-b2b-icon_cell">
                          <div class="nds-form-element">
                              <div class="nds-form-element__control nds-b2b-table_checkbox">
                                  <label class="nds-checkbox nds-p-top_none">
                                      <input type="checkbox" data-check="checkall" value="All">
                                      <span class="nds-checkbox_faux"></span>
                                  </label>
                              </div>
                          </div>
                      </th>
                      <th class="nds-b2b-table_cell" >
                          <a class="nds-text-link_reset nds-grid nds-grid_align-spread nds-b2b-table_cell-sort" role="button" tabindex="-1">
                              <span class="nds-truncate">First Name</span>
                              <div class="nds-icon_container">
                                  <svg class="nds-icon nds-icon-text-default nds-icon_x-small" aria-hidden="true">
                                      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                                  </svg>
                              </div>
                          </a>
                      </th>
                      <th class="nds-b2b-table_cell" >
                          <a class="nds-text-link_reset nds-grid nds-grid_align-spread nds-b2b-table_cell-sort" role="button" tabindex="-1">
                              <span class="nds-truncate">Last Name</span>
                              <div class="nds-icon_container">
                                  <span aria-hidden="true">
                                      <svg class="nds-icon nds-icon-text-default nds-icon_x-small" aria-hidden="true">
                                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                                      </svg>
                                  </span>
                              </div>
                          </a>
                      </th>
                      <th class="nds-b2b-table_cell" >
                          <a class="nds-text-link_reset nds-grid nds-grid_align-spread nds-b2b-table_cell-sort" role="button" tabindex="-1">
                              <span class="nds-truncate">Address</span>
                              <div class="nds-icon_container">
                                  <span aria-hidden="true">
                                       <svg class="nds-icon nds-icon-text-default nds-icon_x-small" aria-hidden="true">
                                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                                        </svg>
                                  </span>
                              </div>
                          </a>
                      </th>
                      <th class="nds-b2b-table_cell" >
                          <a class="nds-text-link_reset nds-grid nds-grid_align-spread nds-b2b-table_cell-sort" role="button" tabindex="-1">
                              <span class="nds-truncate">Projects</span>
                              <div class="nds-icon_container">
                                  <span aria-hidden="true">
                                       <svg class="nds-icon nds-icon-text-default nds-icon_x-small" aria-hidden="true">
                                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                                      </svg>
                                  </span>
                              </div>
                          </a>
                      </th>
                  </tr>
              </thead>
              <tbody class="nds-b2b-table_body">
                  <tr class="nds-b2b-table_row">    
                      <td class="nds-b2b-table_cell nds-b2b-icon_cell">
                          <div class="nds-form-element">
                              <div class="nds-form-element__control nds-b2b-table_checkbox">
                                  <label class="nds-checkbox">
                                      <input type="checkbox" name="options" value="dd">
                                      <span class="nds-checkbox_faux nds-transition-hide nds-b2b-row_hover-show"></span>
                                  </label>
                              </div>
                          </div>
                      </td>
                      <td class="nds-b2b-table_cell">
                          <label class="nds-b2b-table_cell-label">First Name</label>
                          <div>Sam</div>
                      </td>
                      <td class="nds-b2b-table_cell">
                          <label class="nds-b2b-table_cell-label">Last Name</label>
                          <div>Walter</div>
                      </td>
                      <td class="nds-b2b-table_cell">
                          <label class="nds-b2b-table_cell-label">Address</label>
                          <div>Easton, PA</div>
                      </td>
                      <td class="nds-b2b-table_cell">
                          <label class="nds-b2b-table_cell-label">Projects</label>
                          <div>25</div>
                      </td>
                  </tr>
                  <tr class="nds-b2b-table_row">    
                      <td class="nds-b2b-table_cell nds-b2b-icon_cell">
                          <div class="nds-form-element">
                              <div class="nds-form-element__control nds-b2b-table_checkbox">
                                  <label class="nds-checkbox">
                                      <input type="checkbox" name="options" value="dd">
                                      <span class="nds-checkbox_faux nds-transition-hide nds-b2b-row_hover-show"></span>
                                  </label>
                              </div>
                          </div>
                      </td>
                      <td class="nds-b2b-table_cell">
                          <label class="nds-b2b-table_cell-label">First Name</label>
                          <div>Cathy</div>
                      </td>
                      <td class="nds-b2b-table_cell">
                          <label class="nds-b2b-table_cell-label">Last Name</label>
                          <div>Doe</div>
                      </td>
                      <td class="nds-b2b-table_cell">
                          <label class="nds-b2b-table_cell-label">Address</label>
                          <div>Jersey City, NJ</div>
                      </td>
                      <td class="nds-b2b-table_cell">
                          <label class="nds-b2b-table_cell-label">Projects</label>
                          <div>27</div>
                      </td>
                  </tr>
                  <tr class="nds-b2b-table_row">    
                      <td class="nds-b2b-table_cell nds-b2b-icon_cell">
                          <div class="nds-form-element">
                              <div class="nds-form-element__control nds-b2b-table_checkbox">
                                  <label class="nds-checkbox">
                                      <input type="checkbox" name="options" value="dd">
                                      <span class="nds-checkbox_faux nds-transition-hide nds-b2b-row_hover-show"></span>
                                  </label>
                              </div>
                          </div>
                      </td>
                      <td class="nds-b2b-table_cell">
                          <label class="nds-b2b-table_cell-label">First Name</label>
                          <div>John</div>
                      </td>
                      <td class="nds-b2b-table_cell">
                          <label class="nds-b2b-table_cell-label">Last Name</label>
                          <div>Doe</div>
                      </td>
                      <td class="nds-b2b-table_cell">
                          <label class="nds-b2b-table_cell-label">Address</label>
                          <div>Philadelphia, Pa</div>
                      </td>
                      <td class="nds-b2b-table_cell">
                          <label class="nds-b2b-table_cell-label">Projects</label>
                          <div>27</div>
                      </td>
                  </tr>
              </tbody>
          </table>  
      </div>
      <div class="nds-grid nds-m-around_x-small nds-grid_align-end">
          <button type="button" class="vlocity-btn nds-button">
              <svg class="nds-icon nds-icon-text-default nds-icon_x-small" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronleft"></use>
              </svg>
          </button>
          <button type="button" class="vlocity-btn nds-button nds-button_brand">1</button>
          <button type="button" class="vlocity-btn nds-button nds-button_brand">2</button>
          <button type="button" class="vlocity-btn nds-button ">
             <svg class="nds-icon nds-icon-text-default nds-icon_x-small" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
            </svg>
          </button>
      </div>
    </div>  
    `);
  })
  .add("b2bDataTableGroups", () => {
    return withExample(`
    <div class="nds-m-vertical_medium">
      <div class="nds-grid nds-color__background_gray-1 nds-wrap nds-grid_vertical-align-center nds-p-top_small">
          <div class="nds-col nds-size_6-of-12 nds-large-size_3-of-12 nds-p-horizontal_medium nds-p-bottom_small">
              <div class="nds-grid nds-grid_vertical-align-center">  
                  <label class="nds-size_3-of-12 nds-m-right_medium nds-b2b-table_transition-hide">Group by</label> 
                  <div class="nds-b2b-input">
                      <div class="nds-form-element nds-form-container">
                          <div aria-expanded="false" aria-haspopup="listbox" role="combobox" class="nds-combobox nds-dropdown-trigger nds-dropdown-trigger_click">
                              <div class="nds-form-element__control">
                                  <div class="nds-combobox_container">
                                      <div role="none" class="nds-combobox__form-element nds-input-has-icon nds-input-has-icon_right nds-form-element__control nds-form-element__control-animated-label">
                                          <input value="No Group" readonly="true" class="nds-input nds-listbox__option-text_entity nds-not-empty nds-is-dirty">
                                          <div class="nds-form-element__label nds-align-middle nds-animated-label__ease-out">
                                              <label></label>
                                          </div>
                                          <span class="nds-icon_container nds-icon-utility-down nds-input__icon nds-input__icon_right">
                                              <svg class="nds-icon nds-icon-text-default nds-icon_x-small" aria-hidden="true">
                                                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                                              </svg>
                                          </span>
                                      </div>
                                  </div>
                                  <div class="nds-form-element">
                                      <div role="listbox" class="nds-dropdown nds-dropdown_fluid nds-p-bottom_none">
                                          <ul role="presentation" class="listbox nds-listbox nds-listbox_vertical">
                                              <li class="nds-listbox__item">
                                                  <div data-value="none" data-label="No Grouping" role="option" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-is-selected">
                                                      <span class="nds-media__body">
                                                          <span class="nds-listbox__option-text nds-listbox__option-text_entity">No Grouping</span>
                                                      </span>
                                                  </div>
                                              </li>
                                              <li class="nds-listbox__item">
                                                  <div data-value="First Name" data-label="First Name" role="option" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-is-selected">
                                                      <span class="nds-media__body">
                                                          <span class="nds-listbox__option-text nds-listbox__option-text_entity">First Name</span>
                                                      </span>
                                                  </div>
                                              </li>
                                              <li class="nds-listbox__item">
                                                  <div data-value="Last Name" data-label="Last Name" role="option" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-is-selected">
                                                      <span class="nds-media__body">
                                                          <span class="nds-listbox__option-text nds-listbox__option-text_entity">Last Name</span>
                                                      </span>
                                                  </div>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="nds-col nds-size_6-of-12 nds-large-size_3-of-12 nds-p-horizontal_medium nds-p-bottom_small">
              <div class="nds-grid nds-grid_vertical-align-center">  
                  <label class="nds-size_3-of-12 nds-m-right_medium nds-b2b-table_transition-hide">Displaying</label> 
                  <div class="nds-b2b-input">
                      <div class="nds-form-element nds-form-container">
                          <div aria-expanded="false" aria-haspopup="listbox" role="combobox" class="nds-combobox nds-dropdown-trigger nds-dropdown-trigger_click">
                              <div class="nds-form-element__control">
                                  <div class="nds-combobox_container">
                                      <div role="none" class="nds-combobox__form-element nds-input-has-icon nds-input-has-icon_right nds-form-element__control nds-form-element__control-animated-label">
                                          <input value="All" readonly="" class="nds-input nds-listbox__option-text_entity nds-not-empty nds-is-dirty">
                                          <div class="nds-form-element__label nds-align-middle nds-animated-label__ease-out">
                                              <label></label>
                                          </div>
                                          <span class="nds-icon_container nds-icon-utility-down nds-input__icon nds-input__icon_right">
                                               <svg class="nds-icon nds-icon-text-default nds-icon_x-small" aria-hidden="true">
                                                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                                              </svg>
                                          </span>
                                      </div>
                                  </div>
                                  <div class="nds-form-element">
                                      <div role="listbox" class="nds-dropdown nds-dropdown_fluid nds-p-bottom_none">
                                          <ul role="presentation" class="listbox nds-listbox nds-listbox_vertical">
                                              <li class="nds-listbox__item">
                                                  <div data-value="none" data-label="All" role="option" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-is-selected">
                                                      <span class="nds-media__body">
                                                          <span class="nds-listbox__option-text nds-listbox__option-text_entity">All</span>
                                                      </span>
                                                  </div>
                                              </li>
                                              <li class="nds-listbox__item">
                                                  <div data-value="First Name" data-label="Primary" role="option" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-is-selected">
                                                      <span class="nds-media__body">
                                                          <span class="nds-listbox__option-text nds-listbox__option-text_entity">Primary</span>
                                                      </span>
                                                  </div>
                                              </li>
                                              <li class="nds-listbox__item">
                                                  <div data-value="Last Name" data-label="Secondary" role="option" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-is-selected">
                                                      <span class="nds-media__body">
                                                          <span class="nds-listbox__option-text nds-listbox__option-text_entity">Secondary</span>
                                                      </span>
                                                  </div>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="nds-size_6-of-12 nds-large-size_3-of-12 nds-p-horizontal_medium nds-text-body_small nds-p-bottom_small">
              <span>Total : 12</span>
              <span class="nds-m-left_medium">Showing : 4</span>
          </div>
         
          <div class="nds-size_6-of-12 nds-large-size_3-of-12 nds-b2b-input nds-p-horizontal_medium nds-p-bottom_small">
              <div class="nds-grid nds-grid_vertical-align-center">  
                <label class=" nds-size_3-of-12 nds-m-right_medium nds-b2b-table_transition-hide">Search</label> 
                <div class="nds-form-element__control nds-input-has-icon nds-input-has-icon_left">
                    <svg class="nds-icon nds-input__icon nds-input__icon_left nds-icon-text-default nds-icon_xx-small" aria-hidden="true">
                        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
                    </svg>
                    <input type="text" class="nds-input" placeholder="search" onkeyup={searchKeyChangeHandler} value="search">
                </div>
              </div>  
          </div>
      </div>
      <div class="nds-is-relative">
          <table class="nds-b2b-table nds-m-top_medium" style="border-collapse:collapse">
              <thead class="nds-b2b-table_head">
                  <tr class="nds-line-height_reset nds-b2b-table_row nds-b2b-table_head-row">
                      <th class="nds-b2b-table_cell nds-b2b-icon_cell">
                          <div class="nds-form-element">
                              <div class="nds-form-element__control nds-b2b-table_checkbox">
                                  <label class="nds-checkbox nds-p-top_none">
                                      <input type="checkbox" data-check="checkall" value="All">
                                      <span class="nds-checkbox_faux"></span>
                                  </label>
                              </div>
                          </div>
                      </th>
                      <th class="nds-b2b-table_cell">
                          Group By
                      </th>
                      <th class="nds-b2b-table_cell" >
                          <a class="nds-text-link_reset nds-grid nds-grid_align-spread nds-b2b-table_cell-sort" role="button" tabindex="-1">
                              <span class="nds-truncate">First Name</span>
                              <div class="nds-icon_container">
                                  <svg class="nds-icon nds-icon-text-default nds-icon_x-small" aria-hidden="true">
                                      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                                  </svg>
                              </div>
                          </a>
                      </th>
                      <th class="nds-b2b-table_cell" >
                          <a class="nds-text-link_reset nds-grid nds-grid_align-spread nds-b2b-table_cell-sort" role="button" tabindex="-1">
                              <span class="nds-truncate">Last Name</span>
                              <div class="nds-icon_container">
                                  <span aria-hidden="true">
                                      <svg class="nds-icon nds-icon-text-default nds-icon_x-small" aria-hidden="true">
                                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                                      </svg>
                                  </span>
                              </div>
                          </a>
                      </th>
                      <th class="nds-b2b-table_cell" >
                          <a class="nds-text-link_reset nds-grid nds-grid_align-spread nds-b2b-table_cell-sort" role="button" tabindex="-1">
                              <span class="nds-truncate">Address</span>
                              <div class="nds-icon_container">
                                  <span aria-hidden="true">
                                       <svg class="nds-icon nds-icon-text-default nds-icon_x-small" aria-hidden="true">
                                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                                        </svg>
                                  </span>
                              </div>
                          </a>
                      </th>
                      <th class="nds-b2b-table_cell" >
                          <a class="nds-text-link_reset nds-grid nds-grid_align-spread nds-b2b-table_cell-sort" role="button" tabindex="-1">
                              <span class="nds-truncate">Projects</span>
                              <div class="nds-icon_container">
                                  <span aria-hidden="true">
                                       <svg class="nds-icon nds-icon-text-default nds-icon_x-small" aria-hidden="true">
                                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                                      </svg>
                                  </span>
                              </div>
                          </a>
                      </th>
                  </tr>
              </thead>
              <tbody class="nds-b2b-table_body">
                  <tr class="nds-b2b-table_row">    
                      <td class="nds-b2b-table_cell nds-b2b-table_transition-hide"></td>
                      <td class="nds-b2b-table_cell" colspan="5">
                          Walter
                      </td>
                  </tr>
                  <tr class="nds-b2b-table_row">
                      <td class="nds-b2b-table_cell nds-b2b-icon_cell">
                          <div class="nds-form-element">
                              <div class="nds-form-element__control nds-b2b-table_checkbox">
                                  <label class="nds-checkbox">
                                      <input type="checkbox" name="options" value="dd">
                                      <span class="nds-checkbox_faux nds-transition-hide nds-b2b-row_hover-show"></span>
                                  </label>
                              </div>
                          </div>
                      </td>
                      <td class="nds-b2b-table_cell nds-b2b-table_transition-hide"></td>
                      <td class="nds-b2b-table_cell">
                          <label class="nds-b2b-table_cell-label">First Name</label>
                          <div>Sam</div>
                      </td>
                      <td class="nds-b2b-table_cell">
                          <label class="nds-b2b-table_cell-label">Last Name</label>
                          <div>Walter</div>
                      </td>
                      <td class="nds-b2b-table_cell">
                          <label class="nds-b2b-table_cell-label">Address</label>
                          <div>Easton, PA</div>
                      </td>
                      <td class="nds-b2b-table_cell">
                          <label class="nds-b2b-table_cell-label">Projects</label>
                          <div>25</div>
                      </td>
                  </tr>
                  <tr class="nds-b2b-table_row">    
                    <td class="nds-b2b-table_cell nds-b2b-table_transition-hide"></td>
                    <td class="nds-b2b-table_cell" colspan="5">
                        Doe
                    </td>
                  </tr>
                  <tr class="nds-b2b-table_row">    
                      <td class="nds-b2b-table_cell nds-b2b-icon_cell">
                          <div class="nds-form-element">
                              <div class="nds-form-element__control nds-b2b-table_checkbox">
                                  <label class="nds-checkbox">
                                      <input type="checkbox" name="options" value="dd">
                                      <span class="nds-checkbox_faux nds-transition-hide nds-b2b-row_hover-show"></span>
                                  </label>
                              </div>
                          </div>
                      </td>
                      <td class="nds-b2b-table_cell nds-b2b-table_transition-hide"></td>
                      <td class="nds-b2b-table_cell">
                          <label class="nds-b2b-table_cell-label">First Name</label>
                          <div>Cathy</div>
                      </td>
                      <td class="nds-b2b-table_cell">
                          <label class="nds-b2b-table_cell-label">Last Name</label>
                          <div>Doe</div>
                      </td>
                      <td class="nds-b2b-table_cell">
                          <label class="nds-b2b-table_cell-label">Address</label>
                          <div>Jersey City, NJ</div>
                      </td>
                      <td class="nds-b2b-table_cell">
                          <label class="nds-b2b-table_cell-label">Projects</label>
                          <div>27</div>
                      </td>
                  </tr>
                  <tr class="nds-b2b-table_row"> 
                      <td class="nds-b2b-table_cell nds-b2b-icon_cell">
                          <div class="nds-form-element">
                              <div class="nds-form-element__control nds-b2b-table_checkbox">
                                  <label class="nds-checkbox">
                                      <input type="checkbox" name="options" value="dd">
                                      <span class="nds-checkbox_faux nds-transition-hide nds-b2b-row_hover-show"></span>
                                  </label>
                              </div>
                          </div>
                      </td>
                      <td class="nds-b2b-table_cell nds-b2b-table_transition-hide"></td>
                      <td class="nds-b2b-table_cell">
                          <label class="nds-b2b-table_cell-label">First Name</label>
                          <div>John</div>
                      </td>
                      <td class="nds-b2b-table_cell">
                          <label class="nds-b2b-table_cell-label">Last Name</label>
                          <div>Doe</div>
                      </td>
                      <td class="nds-b2b-table_cell">
                          <label class="nds-b2b-table_cell-label">Address</label>
                          <div>Philadelphia, Pa</div>
                      </td>
                      <td class="nds-b2b-table_cell">
                          <label class="nds-b2b-table_cell-label">Projects</label>
                          <div>27</div>
                      </td>
                  </tr>
              </tbody>
          </table>  
      </div>
      <div class="nds-grid nds-m-around_x-small nds-grid_align-end">
          <button type="button" class="vlocity-btn nds-button">
              <svg class="nds-icon nds-icon-text-default nds-icon_x-small" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronleft"></use>
              </svg>
          </button>
          <button type="button" class="vlocity-btn nds-button nds-button_brand">1</button>
          <button type="button" class="vlocity-btn nds-button nds-button_brand">2</button>
          <button type="button" class="vlocity-btn nds-button ">
             <svg class="nds-icon nds-icon-text-default nds-icon_x-small" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
            </svg>
          </button>
      </div>
    </div>  
    `);
  })

;
import React from "react";
import * as Sentry from "@sentry/react";

import BaseWidget, { WidgetProps, WidgetState } from "./BaseWidget";
import { WidgetType, WidgetTypes } from "constants/WidgetConstants";
import { VALIDATION_TYPES } from "constants/WidgetValidation";

import MenuComponent from "components/designSystems/appsmith/MenuComponent";

export interface MenuWidgetProps extends WidgetProps {
  label: string;
  menuItems: Record<
    string,
    {
      id: string;
      label: string;
      widgetId: string;
      index: number;
      isVisible: boolean;
      isDisabled: boolean;
    }
  >;
  icon?: string;
}

class MenuWidget extends BaseWidget<MenuWidgetProps, WidgetState> {
  static getPropertyPaneConfig() {
    return [
      {
        sectionName: "General",
        children: [
          {
            propertyName: "label",
            helpText: "Sets the label of a menu",
            label: "Label",
            controlType: "INPUT_TEXT",
            placeholderText: "Enter label",
            isBindProperty: true,
            isTriggerProperty: false,
            validation: VALIDATION_TYPES.TEXT,
          },
          {
            propertyName: "backgroundColor",
            helpText: "Sets the background color of the widget",
            label: "Background color",
            controlType: "COLOR_PICKER",
            isBindProperty: false,
            isTriggerProperty: false,
          },
          {
            propertyName: "textColor",
            helpText: "Sets the text color of the widget",
            label: "Text color",
            controlType: "COLOR_PICKER",
            isBindProperty: false,
            isTriggerProperty: false,
          },
          {
            propertyName: "isDisabled",
            helpText: "Disables input to the widget",
            label: "Disabled",
            controlType: "SWITCH",
            isJSConvertible: true,
            isBindProperty: true,
            isTriggerProperty: false,
            validation: VALIDATION_TYPES.BOOLEAN,
          },
          {
            propertyName: "isVisible",
            helpText: "Controls the visibility of the widget",
            label: "Visible",
            controlType: "SWITCH",
            isJSConvertible: true,
            isBindProperty: true,
            isTriggerProperty: false,
            validation: VALIDATION_TYPES.BOOLEAN,
          },
          {
            propertyName: "isCompact",
            helpText: "Decides if the widget is in compact mode",
            label: "Compact",
            controlType: "SWITCH",
            isJSConvertible: true,
            isBindProperty: true,
            isTriggerProperty: false,
            validation: VALIDATION_TYPES.BOOLEAN,
          },
        ],
      },
      {
        sectionName: "Menu Items",
        children: [
          {
            helpText: "Menu items",
            propertyName: "menuItems",
            controlType: "MENU_ITEMS",
            label: "",
            isBindProperty: false,
            isTriggerProperty: false,
            panelConfig: {
              editableTitle: true,
              titlePropertyName: "label",
              panelIdPropertyName: "id",
              updateHook: (
                props: any,
                propertyPath: string,
                propertyValue: string,
              ) => {
                return [
                  {
                    propertyPath,
                    propertyValue,
                  },
                ];
              },
              children: [
                {
                  sectionName: "General",
                  children: [
                    {
                      propertyName: "label",
                      helpText: "Sets the label of a menu item",
                      label: "Label",
                      controlType: "INPUT_TEXT",
                      placeholderText: "Enter label",
                      isBindProperty: true,
                      isTriggerProperty: false,
                      validation: VALIDATION_TYPES.TEXT,
                    },
                    {
                      propertyName: "backgroundColor",
                      helpText: "Sets the background color of a menu item",
                      label: "Background color",
                      controlType: "COLOR_PICKER",
                      isBindProperty: false,
                      isTriggerProperty: false,
                    },
                    {
                      propertyName: "textColor",
                      helpText: "Sets the text color of a menu item",
                      label: "Text color",
                      controlType: "COLOR_PICKER",
                      isBindProperty: false,
                      isTriggerProperty: false,
                    },
                    {
                      propertyName: "isDisabled",
                      helpText: "Disables input to the widget",
                      label: "Disabled",
                      controlType: "SWITCH",
                      isJSConvertible: true,
                      isBindProperty: true,
                      isTriggerProperty: false,
                      validation: VALIDATION_TYPES.BOOLEAN,
                    },
                    {
                      propertyName: "isVisible",
                      helpText: "Controls the visibility of the widget",
                      label: "Visible",
                      controlType: "SWITCH",
                      isJSConvertible: true,
                      isBindProperty: true,
                      isTriggerProperty: false,
                      validation: VALIDATION_TYPES.BOOLEAN,
                    },
                  ],
                },
                {
                  sectionName: "Icon Options",
                  children: [
                    {
                      propertyName: "iconName",
                      label: "Icon",
                      helpText:
                        "Name of a Blueprint UI icon (or an icon element) to render before or after the text",
                      controlType: "ICON_SELECT",
                      isBindProperty: false,
                      isTriggerProperty: false,
                      validation: VALIDATION_TYPES.TEXT,
                    },
                    {
                      propertyName: "iconColor",
                      helpText: "Sets the icon color of a menu item",
                      label: "Icon color",
                      controlType: "COLOR_PICKER",
                      isBindProperty: false,
                      isTriggerProperty: false,
                    },
                    {
                      propertyName: "iconAlign",
                      label: "Icon alignment",
                      helpText: "Sets the icon alignment of a menu item",
                      controlType: "ICON_ALIGN",
                      isBindProperty: false,
                      isTriggerProperty: false,
                      validation: VALIDATION_TYPES.TEXT,
                    },
                  ],
                },
                {
                  sectionName: "Actions",
                  children: [
                    {
                      helpText:
                        "Triggers an action when the menu item is clicked",
                      propertyName: "onClick",
                      label: "onClick",
                      controlType: "ACTION_SELECTOR",
                      isJSConvertible: true,
                      isBindProperty: true,
                      isTriggerProperty: true,
                    },
                  ],
                },
              ],
            },
          },
        ],
      },
      {
        sectionName: "Icon Options",
        children: [
          {
            propertyName: "iconName",
            label: "Icon",
            helpText:
              "Name of a Blueprint UI icon (or an icon element) to render before or after the text",
            controlType: "ICON_SELECT",
            isBindProperty: false,
            isTriggerProperty: false,
            validation: VALIDATION_TYPES.TEXT,
          },
          {
            propertyName: "iconColor",
            helpText: "Sets the icon color of a menu item",
            label: "Icon color",
            controlType: "COLOR_PICKER",
            isBindProperty: false,
            isTriggerProperty: false,
          },
          {
            propertyName: "iconAlign",
            label: "Icon alignment",
            helpText: "Sets the icon alignment of a menu item",
            controlType: "ICON_ALIGN",
            isBindProperty: false,
            isTriggerProperty: false,
            validation: VALIDATION_TYPES.TEXT,
          },
        ],
      },
    ];
  }

  getPageView() {
    const { label, widgetId } = this.props;
    return <MenuComponent label={label} widgetId={widgetId} />;
  }

  getWidgetType(): WidgetType {
    return WidgetTypes.MENU_WIDGET;
  }
}

export default MenuWidget;
export const ProfiledMenuWidget = Sentry.withProfiler(MenuWidget);

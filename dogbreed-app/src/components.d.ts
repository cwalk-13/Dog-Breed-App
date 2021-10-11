/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults } from "@stencil/router";
export namespace Components {
    interface AccordionDisplay {
        "breedName": string;
        "color": string;
        "image": string;
        "width": string;
    }
    interface AppHome {
    }
    interface AppProfile {
        "match": MatchResults;
    }
    interface AppRoot {
    }
    interface BreedsButton {
    }
}
declare global {
    interface HTMLAccordionDisplayElement extends Components.AccordionDisplay, HTMLStencilElement {
    }
    var HTMLAccordionDisplayElement: {
        prototype: HTMLAccordionDisplayElement;
        new (): HTMLAccordionDisplayElement;
    };
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLBreedsButtonElement extends Components.BreedsButton, HTMLStencilElement {
    }
    var HTMLBreedsButtonElement: {
        prototype: HTMLBreedsButtonElement;
        new (): HTMLBreedsButtonElement;
    };
    interface HTMLElementTagNameMap {
        "accordion-display": HTMLAccordionDisplayElement;
        "app-home": HTMLAppHomeElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
        "breeds-button": HTMLBreedsButtonElement;
    }
}
declare namespace LocalJSX {
    interface AccordionDisplay {
        "breedName"?: string;
        "color"?: string;
        "image"?: string;
        "onOnToggle"?: (event: CustomEvent<any>) => void;
        "width"?: string;
    }
    interface AppHome {
    }
    interface AppProfile {
        "match"?: MatchResults;
    }
    interface AppRoot {
    }
    interface BreedsButton {
    }
    interface IntrinsicElements {
        "accordion-display": AccordionDisplay;
        "app-home": AppHome;
        "app-profile": AppProfile;
        "app-root": AppRoot;
        "breeds-button": BreedsButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "accordion-display": LocalJSX.AccordionDisplay & JSXBase.HTMLAttributes<HTMLAccordionDisplayElement>;
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "breeds-button": LocalJSX.BreedsButton & JSXBase.HTMLAttributes<HTMLBreedsButtonElement>;
        }
    }
}

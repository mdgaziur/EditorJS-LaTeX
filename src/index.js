import katex from 'katex';
/*
              EditorJS LaTeX
      Created By: MD Gaziur Rahman Noor
    Adds LaTex block support to EditorJS
*/
export default class EJLaTeX {

    constructor({ data, config }) {
        //Get the saved data if exists
        this.data = data.math;
        if (config && config.css) {
            this.addCss(config.css);
        }
    }

    static get toolbox() {
        return {
            title: "Math",
            //icon: '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>'
            icon: '<svg id="Layer_1" enable-background="new 0 0 506.1 506.1" height="512" viewBox="0 0 506.1 506.1" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m489.609 0h-473.118c-9.108 0-16.491 7.383-16.491 16.491v473.118c0 9.107 7.383 16.491 16.491 16.491h473.119c9.107 0 16.49-7.383 16.49-16.491v-473.118c0-9.108-7.383-16.491-16.491-16.491zm-16.49 473.118h-440.138v-440.137h440.138z"/><path d="m367.278 240.136v-62.051c0-8.836-7.163-16-16-16s-16 7.164-16 16v147.377c0 15.024 18.993 21.77 28.457 10.03 34.691 18.107 77.146-6.988 77.146-46.831.001-37.966-39-63.416-73.603-48.525zm20.802 69.327c-11.47 0-20.802-9.332-20.802-20.802s9.332-20.802 20.802-20.802 20.802 9.332 20.802 20.802-9.332 20.802-20.802 20.802z"/><path d="m112.397 200.262h-14.014c-8.836 0-16 7.164-16 16s7.164 16 16 16h14.014c8.291 0 15.037 6.746 15.037 15.037v4.998c-30.589-10.389-62.216 12.536-62.216 44.609 0 34.402 35.954 57.331 67.13 42.629 10.128 9.747 27.086 2.537 27.086-11.521v-80.715c0-25.936-21.101-47.037-47.037-47.037zm-.071 111.752c-8.331 0-15.108-6.777-15.108-15.108s6.777-15.108 15.108-15.108 15.108 6.777 15.108 15.108-6.778 15.108-15.108 15.108z"/><path d="m287.786 243.114c-6.248-6.248-16.379-6.249-22.627 0l-18.11 18.11-18.11-18.11c-6.249-6.249-16.379-6.249-22.627 0-6.249 6.249-6.249 16.379 0 22.627l18.11 18.11-18.11 18.11c-6.248 6.248-6.248 16.379 0 22.627s16.378 6.249 22.627 0l18.11-18.11 18.11 18.11c6.246 6.248 16.377 6.249 22.627 0 6.249-6.249 6.249-16.379 0-22.627l-18.11-18.11 18.11-18.11c6.249-6.248 6.249-16.379 0-22.627z"/></svg>'
        };
    }

    render() {
        //Create all the DOM elements
        const wrapper = document.createElement('div');
        const preview = document.createElement('p');
        const input = document.createElement('input');

        if (typeof katex === "undefined") {
            let errorMessageSpan = document.createElement("span");
            errorMessageSpan.className = "errorMessage";
            errorMessageSpan.innerText = "[Erorr] KaTeX is not found! Add KaTeX to this webpage to continue!"
            return errorMessageSpan;
        }

        wrapper.classList.add('math-input-wrapper');
        preview.classList.add('math-preview');
        input.classList.add('math-input');

        //Load the data if exists
        input.value = this.data ? this.data : '';

        //Set the placeholder text for LaTeX expression input
        input.setAttribute("placeholder", "Enter LaTeX here");

        //Will render LaTeX if there is any in saved data
        katex.render(input.value, preview, {
            throwOnError: false
        });

        input.addEventListener('keyup', (e) => {
            //Prevent default actions
            e.preventDefault();

            //Render LaTeX expression
            katex.render(input.value, preview, {
                throwOnError: false
            });
        });

        wrapper.appendChild(preview);
        wrapper.appendChild(input);

        return wrapper;
    }

    save(blockContent) {
        return {
            math: blockContent.childNodes[1].value
        };
    }

    addCss(cssRules) {

        const head = document.head;

        let css = document.createElement('style');
        if (css.styleSheet) css.styleSheet.cssText = cssRules; // Support for IE
        else css.appendChild(document.createTextNode(cssRules)); // Support for the rest
        head.appendChild(css);
    }
}

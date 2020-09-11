/*
              EditorJS LaTeX
      Created By: MD Gaziur Rahman Noor
    Adds LaTex block support to EditorJS
*/
class EJLaTeX {

    constructor({data}) {
        //Get the saved data if exists
        this.data = data.math;
    }

    static get toolbox() {
        return {
            title: "Math",
            icon: '<svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M263.5 63C265.2 51.8 272.8 40 283.7 40c11 0 20 9 20 20h40c0-33.1-26.9-60-60-60 -33.6 0-55.5 28.7-59.8 57.1L211.1 144h-61.4v40h55.4l-39.2 265.1 -0.1 0.9c-1.1 10.6-9.4 22-20.1 22 -11 0-20-9-20-20h-40c0 33.1 26.9 60 60 60 33.7 0 56.8-29.1 59.8-57.5L245.6 184h60.1v-40h-54.2L263.5 63z"/><polygon points="426.3 248 378.2 248 352.2 287.1 334.9 248 291.2 248 326 326.6 270.5 410 318.6 410 345.2 369.9 363 410 406.7 410 371.5 330.4 "/></svg>'
        };
    }

    render (){
        //Create all the DOM nodes
        const wrapper = document.createElement('div');
        const preview = document.createElement('p');
        const input = document.createElement('input');

        if(typeof katex === undefined) {
            throw("KaTeX is required for this module. Otherwise, it will not function properly");
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
}
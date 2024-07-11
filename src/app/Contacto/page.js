import Input from "../componente/Input/index.jsx";
import Button from "../componente/button_form/index.jsx";

const page = (props)=> {
    var labels = props.labels;
  return ( 
    <>
    <div class="section px-2 px-lg-4 pb-4 pt-5 mb-5" id="mod6">
        <div class="container-narrow">
          <div class="text-center mb-5">
            <h2 class="markermodu4 marker-center">Contacto</h2>
          </div>
          <div class="row">
            <div class="col-md-6" data-aos="zoom-in" data-aos-delay="100">
              <div class="bg-light my-2 p-3 pt-2">
                
                <form method="POST">
      
                    <Input titulo={"Email"} />
                    <Input titulo={"Email"} />
                    <Input titulo={"Email"} />

                </form>
        </div>
            </div>
            <div class="col-md-6" data-aos="fade-left" data-aos-delay="300">
              <div class="mt-3 px-1">
                <div class="h5">Sigamos en contacto!</div>
                <p>
                  Comunicate con nosotras a través del formulario.
                </p>
                <p>¡Gracias por visitar nuestro sitio web!</p>
              </div>
              <div class="mt-53 px-1">
                <div class="row">
                  <div class="col-sm-2">
                    <div class="pb-1">Email:</div>
                  </div>
                  <div class="col-sm-10">
                    <div class="pb-1 fw-bolder">yaesaroka@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default page;
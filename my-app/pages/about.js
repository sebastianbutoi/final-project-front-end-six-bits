import css from "../styles/about.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

function About() {
  return (
    <div className={css.about}>
      <h1 className={css.firstheader}>
        It is estimated that 3.6 million tonnes of food is wasted before it
        leaves UK farms
      </h1>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://image.shutterstock.com/shutterstock/photos/739462552/display_1500/stock-photo-attractive-fruit-stall-with-price-tags-739462552.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 id={css.secondheader}>
              Supermarkets look for fruit and vegetables that fit a &apos;beauty
              standard &apos; - they must be of a certain size, shape or colour
              to be sold
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/photos/domestic-compost-heap-picture-id172481514?s=612x612"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 id={css.container}>
              If food waste were a country, it would be the third-largest
              greenhouse gas emitter, after China and the US - Stop Wasting Food
              Movement, 2020
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://image.shutterstock.com/shutterstock/photos/750282589/display_1500/stock-photo-food-in-the-garbage-container-750282589.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3 id={css.container}>
              In UK households, 2 million tonnes of the food that goes to waste
              is untouched or opened/started but not finished - Wrap, 2017
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div>
        <div className={css.container}>
          <img
            className={css.item1}
            id={css.image}
            src="https://image.shutterstock.com/image-photo/hand-putting-lid-on-garbage-600w-344303534.jpg"
            alt="Card image cap"
          ></img>

          <div className={css.item2}>
            <h4>WHY IS FOOD WASTED AT THE FARM?</h4>

            <p>
              {" "}
              It&apos;s time for us to comprehend that food comes in all
              different colours, shapes and size. shapless not tasteless..
              Increasingly in the UK, our food system prizes uniformity over
              taste and the environment, which means that fruit and vegetables
              that look slightly out of place in supermarkets&apos; standards
              are wasted and ignored. The reality is that we live in a world
              where on-demand everything is the norm. This means farmers are
              left with surplus produce, If we want berries in winter and
              Parsnips in summer, we can walk into almost any supermarket and
              it&apos;s available.
            </p>
          </div>
        </div>

        <div className={css.container}>
          <img
            className={css.item1}
            id={css.image}
            src="https://image.shutterstock.com/image-photo/vegetables-cucumbers-peppers-tomatoes-red-600w-1136960387.jpg"
            alt="Card image cap"
          ></img>
          <p className={css.paragraph}>
            {" "}
            Here at SalVeg, We&apos;re salvaging perfectly good vegetables and
            fruits by connecting farmers/local food growers with consumers who
            would like to buy produce at a lower price..
          </p>
        </div>
        <div className={css.sloganContainer}>
          <h4>YOU CAN MAKE A DIFFERENCE</h4>
          <p>
            You can get delicious fruit and vegetables delivered right to your
            door
          </p>
          <p id={css.slogan}>
            Might be shapeless but we guarantee It&apos;s NOT{" "}
            <span id={css.tasteless}>tastless</span>
          </p>
        </div>

        <div className={css.container}>
          <img
            className={css.image1}
            src="https://media.istockphoto.com/vectors/veg-heart-organic-farm-illustration-healthy-lifestyle-vector-design-vector-id872742572?b=1&k=20&m=872742572&s=170667a&w=0&h=dz_7Vz6fBTiMPLUnqVKaf0cWgA_cSJjSBRhu6oxysu4="
            alt="Salveg"
          ></img>
          <img
            className={css.image2}
            src="https://www.seekpng.com/png/detail/355-3559915_for-our-community-get-involved-icon-png.png"
            alt="Get involved image"
          ></img>
          <img
            className={css.image3}
            src="https://beyondfood.org.uk/wp-content/uploads/2020/12/donate-icon3.jpg"
            alt="donate image"
          ></img>
        </div>
        <div className={css.container}>
          <button type="button Salveg-button" id={css.button1}>
            SalVeg our fruit/veg
          </button>
          <button type="button getInvolved-button" id={css.button2}>
            Get Involved
          </button>
          <button type="button Donate-button" id={css.button3}>
            Make a Donation
          </button>
        </div>
      </div>
    </div>
  );
}
export default About;

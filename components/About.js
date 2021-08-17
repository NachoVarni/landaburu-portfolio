export default function About({ divStyle, titleStyle, pStyle }) {
  return (
    <div className={divStyle}>
      <h3 className={titleStyle}>ABOUT ME</h3>

      <p className={pStyle}>
        I’m 26 years old based in Buenos Aires, Argentina. I practice Karate
        since I was 5, also I play futsal.
      </p>
      <p className={pStyle}>
        The relationship with design began when I was in school, because I had
        “Graphic Design” as subject. So when I came home, I would spend hours
        learning Photoshop by myself.
      </p>
      <p className={pStyle}>
        At the age of 19, I landed my first design position: Jr Designer &
        Community Manager at ElPixel Agency. Here I took my first steps and I
        learned a lot.
      </p>
      <p className={pStyle}>
        Currently, I’m working at Telintel as a UX/UI Designer. Also I work as
        Free Lance at PCKZ. If my profile fits, I can also work with you. Let’s
        get to know each other!
      </p>
    </div>
  );
}

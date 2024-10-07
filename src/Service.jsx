/* eslint-disable react/prop-types */

export default function Service({ isVisible, scrollY }) {
  return (
    <section
      className={`service ${isVisible ? "animate" : ""}`}
      style={{
        borderTopLeftRadius: `${Math.max(25 - scrollY / 20, 0)}%`,
        borderTopRightRadius: `${Math.max(25 - scrollY / 20, 0)}%`,
      }}
    >
      <div className={`service-content`}>
        <p className={`para `}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          numquam commodi accusamus! Labore blanditiis fugiat quo iusto nesciunt
          temporibus dolorem minus quas adipisci earum autem, magnam veritatis
          velit ex delectus?
        </p>
      </div>
    </section>
  );
}

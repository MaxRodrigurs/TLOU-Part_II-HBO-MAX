function Other() {

  const seriesData = [
    {
      href: 'https://play.hbomax.com/page/urn:hbo:page:GYyUIBgIkFxu1wwEAAABs:type:series',
      imageSrc: '/img/series-bottom-1.jpg',
    },
    {
      href: 'https://play.hbomax.com/page/urn:hbo:page:GYL51wA5ofaSURgEAAAAC:type:series',
      imageSrc: '/img/series-bottom-2.jpg',
    },
    {
      href: 'https://play.hbomax.com/page/urn:hbo:page:GYL51wA5ofaSURgEAAAAC:type:series',
      imageSrc: '/img/series-bottom-3.jpg',
    },
    {
      href: 'https://play.hbomax.com/page/urn:hbo:page:GYL51wA5ofaSURgEAAAAC:type:series',
      imageSrc: '/img/series-bottom-4.jpg',
    },
    {
      href: 'https://play.hbomax.com/page/urn:hbo:page:GYL51wA5ofaSURgEAAAAC:type:series',
      imageSrc: '/img/series-bottom-5.jpg',
    },
  ];

  return (
    <section className="py-12 ">
      <h2 className="text-3xl font-gilroy-bold">New Releases</h2>

      <div className="mt-6 phone:flex laptop:gap-5 phone:overscroll-auto phone:overflow-x-auto laptop:p-4">
        {seriesData.map((series, index) => (
          <a key={index} className='rounded-lg opacity-70 hover:opacity-100 hover:outline hover:outline-offset-2 hover:outline-2 hover:outline-purple-600 ease-in-out duration-200' href={series.href}>
            <img className="rounded-lg hover:opacity-80 ease-in-out duration-200" src={series.imageSrc} alt="" />
          </a>
        ))}
      </div>
    </section>
  );
}

export default Other;
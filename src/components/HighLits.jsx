import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { watchImg, rightImg } from '../utils';
import VideoCarusel from './VideoCarusel';

const HighLits = () => {
  useGSAP(() => {
    gsap.to('#title', { opacity: 1, y: 0 });
    gsap.to('.link', { opacity: 1, y: 0, stagger: 0.25 }, []);
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc-950"
    >
      <div className="screen-max-width padding">
        <div className="mb-12 w-full items-end md:flex  justify-between margin">
          <h1 id="title" className="section-heading">
            {' '}
            Get the highlights.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link gap-3">
              Watch the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link gap-3">
              Watch the event
              <img src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarusel />
      </div>
    </section>
  );
};

export default HighLits;

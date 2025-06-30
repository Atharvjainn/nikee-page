import Nav from './components/Nav'
import {Hero,PopularProducts,SuperQuality,Services,SpecialOffer,CustomerReviews,Subscribe,Footer} from './sections/index'

const App = () => {

  useEffect(() => {
  document.title = "NIKE";
}, []);
  return (
   <main className='relative'>
      <Nav/> 
      <section className='xl:pl-8 xl:sm:pl-16 wide:pr-8 wide:sm:pr-16 padding-b'>
        <Hero/>
      </section>
      <section className='padding'>
        <PopularProducts />
      </section>
      <section className='padding'>
        <SuperQuality/>
      </section>
      <section className='padding-x py-10'>
        <Services/>
      </section>
      <section className='padding'>
        <SpecialOffer/>
      </section>
      <section className='bg-pale-blue padding'>
        <CustomerReviews/> 
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
       < Subscribe />
      </section>
      <section className=' bg-black padding-x padding-t pb-8'>
       < Footer />
      </section>
    </main>
  );
};

export default App;
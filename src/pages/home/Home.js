import React from 'react';
import './home.css';
import Button from '../../components/Button';
import logo from '../../assets/logo.png'
import heroimg from '../../assets/desgnn-hero.png'
import sessionimg from '../../assets/sessionimg.png'
import eventimg1 from '../../assets/events-1-img.png'
import eventimg2 from '../../assets/events-2-img.png'
import eventimg3 from '../../assets/events-3-img.png'
import socialmedia from '../../assets/impact-img.png'
import joinImg from '../../assets/joindgn.png'
import afterimpactimg from '../../assets/afterImpact.png'
import blogimg from '../../assets/blog-img.png'
import avartar from '../../assets/avatar.png'
import iconpack1 from '../../assets/iconpack1img.png'
import iconpack2 from '../../assets/iconpack2img.png'
import iconpack3 from '../../assets/iconpack3img.png'
import iconpack4 from '../../assets/iconpack4img.png'
import linedotimg from '../../assets/linedots-img.png'


const Home = () => {

    

    const multipleText = () => {
        const text = 'Join Dsgnntalk';
        const count = 7;
        const textArray = [];

        for (let i = 0; i  < count; i++){
            textArray.push(<p key={i}>{text}</p>)
        }

        return textArray;
    }

  return (
    <>
        <header className='flex'>

            <div className='pl-16 pt-10'>
                
                <div>
                    <img src={logo} alt='logo' />
                </div>

                <div className='pt-20'>
                    <div className='text-9xl font-clash uppercase text-white font-bold leading-[94px]'>
                    Let’s <br/> Talk <br/> About <br/> Design.
                    </div>

                    <p className='uppercase text-white font-syne font-bold text-base py-6 tracking-wider'>
                        There's no sub text, just join...
                    </p>

                    {/* <button className='font-clash uppercase font-semibold text-xl py-6 px-14 text-black bg-white rounded-xl'>
                        Join Dsgnntalk
                    </button> */}

                    <Button text="Join Dsgnntalk" className="text-xl py-6 px-14 rounded-xl"/>

                </div>
            </div>
            
            <div>
                <img src={heroimg} alt='heroimg' />
            </div>

           
        </header> 

        <section className='pl-16 py-40'>
            <div className='flex  font-clash text-[56px] font-medium text-white leading-[76px] tracking-wide'>
                Think of this as your go-to source for all <br/>
                things design, where you can explore <br />
                the latest trends, gain insights from top <br />
                designers, and connect with a <br />
                community of like-minded creatives.
            </div>

            <div >
                
            </div>
        </section>

        <section className='container py-7 pl-16'>
            <div className='pb-16 uppercase text-6xl font-bold font-clash text-white'>
                In Recent Past... 
            </div>

            <div className='mx-auto'>
                <img src={sessionimg} alt='img'/> 
            </div>

        </section>

        <section className='py-20'>
            <div className='uppercase font-clash text-[65px] leading-[83px] tracking-wider font-light py-20'>
                
                    <span className='text-[#FFA960] font-light'>Events</span>
                    <span className='text-white px-9 font-medium'>Upcoming Events</span>
                    <span className='text-[#FFA960] font-light'>Upcomin</span>
                
            </div>

            <div className='container px-8 mx-auto relative w-full pb-5'>
                <img src={eventimg1} alt='img' />

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <button className="px-8 py-9 text-[10px] leading-[12px] font-light uppercase tracking-wider backdrop-blur-sm bg-white/10 text-white rounded-full">
                        view
                    </button>
                </div>


                <div className='absolute uppercase bottom-10 left-20 text-white font-clash'>
                    <p className='font-medium tracking-wider text-2xl'>Cyberpunk</p>
                    <p className='text-[9px] tracking-widest'>Invision Studio</p>
                </div>
            </div>

            <div className='container grid grid-cols-2 px-8 mx-auto'>

                <div className='pr-3 relative'>
                    <img src={eventimg2} alt='img2'/>

                    <div className='absolute uppercase bottom-5 left-10 text-white font-clash'>
                    <p className='font-medium tracking-wider text-lg'>Virtual Reality</p>
                    <p className='text-[9px] tracking-widest'>Vision Square</p>
                    </div>
                </div>

                <div className='pl-3 relative'>
                    <img src={eventimg3} alt='img3'/>

                    <div className='absolute uppercase bottom-5 left-12 text-white font-clash'>
                    <p className='font-medium tracking-wider text-lg'>Digital Future</p>
                    <p className='text-[9px] tracking-widest'>Motion Agency</p>
                    </div>

                </div>
            </div>

            <div className='flex justify-center pt-20'>   
                <div className='text-center uppercase text-lg  font-clash text-white font-normal tracking-widest border-b-2 border-white'> See All Events</div>
            </div>
            

        </section>

        <section 
            className='h-screen flex justify-center text-center py-10' 
            style={{
                backgroundImage: `url(${joinImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
            
            <div className='font-clash uppercase mx-auto my-auto'>
                <div className='text-[100px] tracking-wider text-white font-light leading-3'>Join</div>
                <div className='text-white text-[100px] tracking-wider font-medium'>Dsgnntalk</div>
                {/* <button className='uppercase font-semibold text-[20px] py-7 px-[70px] text-black bg-white rounded-xl'>
                    Join Dsgnntalk
                </button> */}

                <Button text="Join Dsgnntalk" className="text-[20px] py-7 px-[70px]" />
            </div>
            
            
        </section>

        <section className='container py-20 flex flex-col items-center'>
            
            <div>
                <img src={socialmedia} alt='media'/>
            </div>
            
            <div>
                <img src={afterimpactimg} alt='afterimpact'/>
            </div>
          
        </section>

        <section className='pl-20 flex flex-wrap mx-auto py-20'>
            <div>
                <img className='w-[400px] h-[700px]' src={blogimg} alt='blog'/>
            </div>

            <div className='text-white font-clash px-10 pt-5'>
                <div className='text-6xl tracking-wider font-light uppercase pb-12'>The blog</div>

                <div className='uppercase font-semibold text-[43px] leading-[43px] tracking-wider pb-9'>I started as a Fashion <br /> Designer now a Web Designer</div>

                <div className='font-medium text-[33px] leading-[45px] tracking-wider pb-20'>
                    Think of this as your go-to source for all <br />
                    things design, where you can explore the <br />
                    latest trends, gain insights from top <br />
                    designers, and connect with a community <br />
                    of like-minded creatives... <span><a href='/'>Read More</a></span>
                </div>


                <div className='flex justify-between items-center'>

                    <div className=''>
                        <img src={avartar} alt='avatar'/>
                        <div className='text-xl tracking-wider leading-[31px]'>Temitayo Eleyinmi</div>
                        <div className='text-base tracking-wider leading-[21px]'>Snr Product Designer, Prunedge</div>
                    </div>

                    <div className='flex items-center'>
                        <div className='font-medium text-[55px] tracking-wider leading-[76px]'>Next </div>
                        <div className='pl-5'>
                            <svg width="41" height="15" viewBox="0 0 41 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M41 7.90515C38.2317 9.2308 35.6584 11.3363 33.28 14.2215L31.233 14.2215C31.8179 12.9738 32.4027 11.8821 32.9876 10.9464C33.5334 10.0106 34.0793 9.23081 34.6252 8.60697L0.528483 8.60697L0.528483 6.1506L34.6252 6.1506C34.0793 5.48777 33.5334 4.68848 32.9876 3.75272C32.4027 2.81697 31.8179 1.74474 31.233 0.536058L33.28 0.536058C35.6584 3.38232 38.2317 5.48778 41 6.85242L41 7.90515Z" fill="white"/>
                            </svg>
                        </div>
                        
                    </div>

                </div>

            </div>

        </section>

        <section className='flex flex-wrap pl-20 text-white font-clash py-20'>
            <div className='uppercase'>
                <div className='font-light text-6xl leading-[68px] tracking-wider'>Access To</div>
                <div className='font-medium text-6xl leading-[68px] tracking-wider pb-8'>Resources</div>
                <div className='flex'>
                 <div className='font-normal text-lg tracking-widest pb-1 border-b-2'>Get Full Access (free)</div>
                </div>

            </div>

            <div className='pl-60 font-clash uppercase'>
                <div className='flex flex-row items-center pb-20'>
                    <div>
                        <img src={iconpack1} alt='icon1' />
                    </div>

                    <div className='font-medium text-3xl leading-[45px] tracking-wider pl-5'>
                        3d icon pack by ozenua <br/> oluwatobi
                    </div>

                    {/* <div>
                        <svg width="41" height="15" viewBox="0 0 41 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M41 7.90515L41.8638 9.70899L43 9.1649L43 7.90515L41 7.90515ZM33.28 14.2215L33.28 16.2215L34.2233 16.2215L34.8233 15.4937L33.28 14.2215ZM31.233 14.2215L29.4221 13.3726L28.0867 16.2215L31.233 16.2215L31.233 14.2215ZM32.9876 10.9464L34.6836 12.0064L34.6998 11.9805L34.7151 11.9541L32.9876 10.9464ZM34.6252 8.60697L36.1303 9.92398L39.0327 6.60697L34.6252 6.60697L34.6252 8.60697ZM0.528482 8.60697L-1.47152 8.60697L-1.47152 10.607L0.528482 10.607L0.528482 8.60697ZM0.528482 6.1506L0.528482 4.1506L-1.47152 4.1506L-1.47152 6.1506L0.528482 6.1506ZM34.6252 6.1506L34.6252 8.1506L38.8631 8.1506L36.169 4.87919L34.6252 6.1506ZM32.9876 3.75273L34.7151 2.74498L34.6998 2.71861L34.6836 2.69273L32.9876 3.75273ZM31.233 0.536058L31.233 -1.46394L28.0435 -1.46394L29.4327 1.40718L31.233 0.536058ZM33.28 0.536058L34.8147 -0.746378L34.2151 -1.46394L33.28 -1.46394L33.28 0.536058ZM41 6.85242L43 6.85242L43 5.60853L41.8843 5.05854L41 6.85242ZM40.1362 6.10131C37.0546 7.57702 34.2606 9.8876 31.7367 12.9494L34.8233 15.4937C37.0561 12.7849 39.4089 10.8846 41.8638 9.70899L40.1362 6.10131ZM33.28 12.2215L31.233 12.2215L31.233 16.2215L33.28 16.2215L33.28 12.2215ZM33.0439 15.0704C33.6027 13.8783 34.1501 12.8599 34.6836 12.0064L31.2916 9.88636C30.6553 10.9044 30.033 12.0693 29.4221 13.3726L33.0439 15.0704ZM34.7151 11.9541C35.2152 11.0969 35.6892 10.4281 36.1303 9.92398L33.12 7.28996C32.4694 8.03352 31.8517 8.92434 31.26 9.93862L34.7151 11.9541ZM34.6252 6.60697L0.528482 6.60697L0.528482 10.607L34.6252 10.607L34.6252 6.60697ZM2.52848 8.60697L2.52848 6.1506L-1.47152 6.1506L-1.47152 8.60697L2.52848 8.60697ZM0.528482 8.1506L34.6252 8.1506L34.6252 4.1506L0.528482 4.1506L0.528482 8.1506ZM36.169 4.87919C35.7063 4.31732 35.2202 3.61086 34.7151 2.74498L31.26 4.76047C31.8466 5.76611 32.4523 6.65823 33.0813 7.42202L36.169 4.87919ZM34.6836 2.69273C34.144 1.82939 33.5933 0.822155 33.0333 -0.335064L29.4327 1.40718C30.0425 2.66733 30.6615 3.80455 31.2916 4.81272L34.6836 2.69273ZM31.233 2.53606L33.28 2.53606L33.28 -1.46394L31.233 -1.46394L31.233 2.53606ZM31.7453 1.81849C34.267 4.83633 37.0521 7.1361 40.1157 8.6463L41.8843 5.05854C39.4113 3.83945 37.0497 1.92831 34.8147 -0.746378L31.7453 1.81849ZM39 6.85242L39 7.90515L43 7.90515L43 6.85242L39 6.85242Z" fill="white"/>
                        </svg>
                    </div> */}

                </div>

                <div className='flex flex-row items-center pb-20'>
                    <div>
                        <img src={iconpack2} alt='icon2' />
                    </div>

                    <div className='font-medium text-3xl leading-[45px] tracking-wider pl-5'>
                        3d icon pack by ozenua <br/> oluwatobi
                    </div>

                    {/* <div>
                        <svg width="41" height="15" viewBox="0 0 41 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M41 7.90515L41.8638 9.70899L43 9.1649L43 7.90515L41 7.90515ZM33.28 14.2215L33.28 16.2215L34.2233 16.2215L34.8233 15.4937L33.28 14.2215ZM31.233 14.2215L29.4221 13.3726L28.0867 16.2215L31.233 16.2215L31.233 14.2215ZM32.9876 10.9464L34.6836 12.0064L34.6998 11.9805L34.7151 11.9541L32.9876 10.9464ZM34.6252 8.60697L36.1303 9.92398L39.0327 6.60697L34.6252 6.60697L34.6252 8.60697ZM0.528482 8.60697L-1.47152 8.60697L-1.47152 10.607L0.528482 10.607L0.528482 8.60697ZM0.528482 6.1506L0.528482 4.1506L-1.47152 4.1506L-1.47152 6.1506L0.528482 6.1506ZM34.6252 6.1506L34.6252 8.1506L38.8631 8.1506L36.169 4.87919L34.6252 6.1506ZM32.9876 3.75273L34.7151 2.74498L34.6998 2.71861L34.6836 2.69273L32.9876 3.75273ZM31.233 0.536058L31.233 -1.46394L28.0435 -1.46394L29.4327 1.40718L31.233 0.536058ZM33.28 0.536058L34.8147 -0.746378L34.2151 -1.46394L33.28 -1.46394L33.28 0.536058ZM41 6.85242L43 6.85242L43 5.60853L41.8843 5.05854L41 6.85242ZM40.1362 6.10131C37.0546 7.57702 34.2606 9.8876 31.7367 12.9494L34.8233 15.4937C37.0561 12.7849 39.4089 10.8846 41.8638 9.70899L40.1362 6.10131ZM33.28 12.2215L31.233 12.2215L31.233 16.2215L33.28 16.2215L33.28 12.2215ZM33.0439 15.0704C33.6027 13.8783 34.1501 12.8599 34.6836 12.0064L31.2916 9.88636C30.6553 10.9044 30.033 12.0693 29.4221 13.3726L33.0439 15.0704ZM34.7151 11.9541C35.2152 11.0969 35.6892 10.4281 36.1303 9.92398L33.12 7.28996C32.4694 8.03352 31.8517 8.92434 31.26 9.93862L34.7151 11.9541ZM34.6252 6.60697L0.528482 6.60697L0.528482 10.607L34.6252 10.607L34.6252 6.60697ZM2.52848 8.60697L2.52848 6.1506L-1.47152 6.1506L-1.47152 8.60697L2.52848 8.60697ZM0.528482 8.1506L34.6252 8.1506L34.6252 4.1506L0.528482 4.1506L0.528482 8.1506ZM36.169 4.87919C35.7063 4.31732 35.2202 3.61086 34.7151 2.74498L31.26 4.76047C31.8466 5.76611 32.4523 6.65823 33.0813 7.42202L36.169 4.87919ZM34.6836 2.69273C34.144 1.82939 33.5933 0.822155 33.0333 -0.335064L29.4327 1.40718C30.0425 2.66733 30.6615 3.80455 31.2916 4.81272L34.6836 2.69273ZM31.233 2.53606L33.28 2.53606L33.28 -1.46394L31.233 -1.46394L31.233 2.53606ZM31.7453 1.81849C34.267 4.83633 37.0521 7.1361 40.1157 8.6463L41.8843 5.05854C39.4113 3.83945 37.0497 1.92831 34.8147 -0.746378L31.7453 1.81849ZM39 6.85242L39 7.90515L43 7.90515L43 6.85242L39 6.85242Z" fill="white"/>
                        </svg>
                    </div> */}

                </div>

                <div className='flex flex-row items-center pb-20'>
                    <div>
                        <img src={iconpack3} alt='icon3' />
                    </div>

                    <div className='font-medium text-3xl leading-[45px] tracking-wider pl-5'>
                        Social Media
                    </div>

                    {/* <div>
                        <svg width="41" height="15" viewBox="0 0 41 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M41 7.90515L41.8638 9.70899L43 9.1649L43 7.90515L41 7.90515ZM33.28 14.2215L33.28 16.2215L34.2233 16.2215L34.8233 15.4937L33.28 14.2215ZM31.233 14.2215L29.4221 13.3726L28.0867 16.2215L31.233 16.2215L31.233 14.2215ZM32.9876 10.9464L34.6836 12.0064L34.6998 11.9805L34.7151 11.9541L32.9876 10.9464ZM34.6252 8.60697L36.1303 9.92398L39.0327 6.60697L34.6252 6.60697L34.6252 8.60697ZM0.528482 8.60697L-1.47152 8.60697L-1.47152 10.607L0.528482 10.607L0.528482 8.60697ZM0.528482 6.1506L0.528482 4.1506L-1.47152 4.1506L-1.47152 6.1506L0.528482 6.1506ZM34.6252 6.1506L34.6252 8.1506L38.8631 8.1506L36.169 4.87919L34.6252 6.1506ZM32.9876 3.75273L34.7151 2.74498L34.6998 2.71861L34.6836 2.69273L32.9876 3.75273ZM31.233 0.536058L31.233 -1.46394L28.0435 -1.46394L29.4327 1.40718L31.233 0.536058ZM33.28 0.536058L34.8147 -0.746378L34.2151 -1.46394L33.28 -1.46394L33.28 0.536058ZM41 6.85242L43 6.85242L43 5.60853L41.8843 5.05854L41 6.85242ZM40.1362 6.10131C37.0546 7.57702 34.2606 9.8876 31.7367 12.9494L34.8233 15.4937C37.0561 12.7849 39.4089 10.8846 41.8638 9.70899L40.1362 6.10131ZM33.28 12.2215L31.233 12.2215L31.233 16.2215L33.28 16.2215L33.28 12.2215ZM33.0439 15.0704C33.6027 13.8783 34.1501 12.8599 34.6836 12.0064L31.2916 9.88636C30.6553 10.9044 30.033 12.0693 29.4221 13.3726L33.0439 15.0704ZM34.7151 11.9541C35.2152 11.0969 35.6892 10.4281 36.1303 9.92398L33.12 7.28996C32.4694 8.03352 31.8517 8.92434 31.26 9.93862L34.7151 11.9541ZM34.6252 6.60697L0.528482 6.60697L0.528482 10.607L34.6252 10.607L34.6252 6.60697ZM2.52848 8.60697L2.52848 6.1506L-1.47152 6.1506L-1.47152 8.60697L2.52848 8.60697ZM0.528482 8.1506L34.6252 8.1506L34.6252 4.1506L0.528482 4.1506L0.528482 8.1506ZM36.169 4.87919C35.7063 4.31732 35.2202 3.61086 34.7151 2.74498L31.26 4.76047C31.8466 5.76611 32.4523 6.65823 33.0813 7.42202L36.169 4.87919ZM34.6836 2.69273C34.144 1.82939 33.5933 0.822155 33.0333 -0.335064L29.4327 1.40718C30.0425 2.66733 30.6615 3.80455 31.2916 4.81272L34.6836 2.69273ZM31.233 2.53606L33.28 2.53606L33.28 -1.46394L31.233 -1.46394L31.233 2.53606ZM31.7453 1.81849C34.267 4.83633 37.0521 7.1361 40.1157 8.6463L41.8843 5.05854C39.4113 3.83945 37.0497 1.92831 34.8147 -0.746378L31.7453 1.81849ZM39 6.85242L39 7.90515L43 7.90515L43 6.85242L39 6.85242Z" fill="white"/>
                        </svg>
                    </div> */}

                </div>

                <div className='flex flex-row items-center '>
                    <div>
                        <img src={iconpack4} alt='icon4' />
                    </div>

                    <div className='font-medium text-3xl leading-[45px] tracking-wider pl-5'>
                        Art Direction
                    </div>

                    {/* <div>
                        <svg width="41" height="15" viewBox="0 0 41 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M41 7.90515L41.8638 9.70899L43 9.1649L43 7.90515L41 7.90515ZM33.28 14.2215L33.28 16.2215L34.2233 16.2215L34.8233 15.4937L33.28 14.2215ZM31.233 14.2215L29.4221 13.3726L28.0867 16.2215L31.233 16.2215L31.233 14.2215ZM32.9876 10.9464L34.6836 12.0064L34.6998 11.9805L34.7151 11.9541L32.9876 10.9464ZM34.6252 8.60697L36.1303 9.92398L39.0327 6.60697L34.6252 6.60697L34.6252 8.60697ZM0.528482 8.60697L-1.47152 8.60697L-1.47152 10.607L0.528482 10.607L0.528482 8.60697ZM0.528482 6.1506L0.528482 4.1506L-1.47152 4.1506L-1.47152 6.1506L0.528482 6.1506ZM34.6252 6.1506L34.6252 8.1506L38.8631 8.1506L36.169 4.87919L34.6252 6.1506ZM32.9876 3.75273L34.7151 2.74498L34.6998 2.71861L34.6836 2.69273L32.9876 3.75273ZM31.233 0.536058L31.233 -1.46394L28.0435 -1.46394L29.4327 1.40718L31.233 0.536058ZM33.28 0.536058L34.8147 -0.746378L34.2151 -1.46394L33.28 -1.46394L33.28 0.536058ZM41 6.85242L43 6.85242L43 5.60853L41.8843 5.05854L41 6.85242ZM40.1362 6.10131C37.0546 7.57702 34.2606 9.8876 31.7367 12.9494L34.8233 15.4937C37.0561 12.7849 39.4089 10.8846 41.8638 9.70899L40.1362 6.10131ZM33.28 12.2215L31.233 12.2215L31.233 16.2215L33.28 16.2215L33.28 12.2215ZM33.0439 15.0704C33.6027 13.8783 34.1501 12.8599 34.6836 12.0064L31.2916 9.88636C30.6553 10.9044 30.033 12.0693 29.4221 13.3726L33.0439 15.0704ZM34.7151 11.9541C35.2152 11.0969 35.6892 10.4281 36.1303 9.92398L33.12 7.28996C32.4694 8.03352 31.8517 8.92434 31.26 9.93862L34.7151 11.9541ZM34.6252 6.60697L0.528482 6.60697L0.528482 10.607L34.6252 10.607L34.6252 6.60697ZM2.52848 8.60697L2.52848 6.1506L-1.47152 6.1506L-1.47152 8.60697L2.52848 8.60697ZM0.528482 8.1506L34.6252 8.1506L34.6252 4.1506L0.528482 4.1506L0.528482 8.1506ZM36.169 4.87919C35.7063 4.31732 35.2202 3.61086 34.7151 2.74498L31.26 4.76047C31.8466 5.76611 32.4523 6.65823 33.0813 7.42202L36.169 4.87919ZM34.6836 2.69273C34.144 1.82939 33.5933 0.822155 33.0333 -0.335064L29.4327 1.40718C30.0425 2.66733 30.6615 3.80455 31.2916 4.81272L34.6836 2.69273ZM31.233 2.53606L33.28 2.53606L33.28 -1.46394L31.233 -1.46394L31.233 2.53606ZM31.7453 1.81849C34.267 4.83633 37.0521 7.1361 40.1157 8.6463L41.8843 5.05854C39.4113 3.83945 37.0497 1.92831 34.8147 -0.746378L31.7453 1.81849ZM39 6.85242L39 7.90515L43 7.90515L43 6.85242L39 6.85242Z" fill="white"/>
                        </svg>
                    </div> */}

                </div>

                
            </div>
        </section>

        <section className='py-28 text-center'>
            <div className='font-clash uppercase font-bold text-white text-[120px] leading-[105px] mx-auto pb-2'>
                {multipleText()}
            </div>
            
            <div className='pt-24 pb-20'>
                {/* <button className='font-clash uppercase font-semibold text-xl py-6 px-14 text-black bg-white'>
                    Join Dsgnntalk
                </button> */}
                <Button text="Join Dsgnntalk" className="text-xl py-6 px-14" />
            </div>

            <div className='container px-20 mx-auto flex justify-center'>
                <img src={linedotimg} alt='lineimg' />
            </div>
            
        </section>

        <footer className='py-16 text-center font-clash'>
            <div className='uppercase pb-28 font-semibold text-white text-2xl leading-[34px] tracking-wider'>There's No Footer</div>

            <div className='mb-10'>
                {/* <button className='font-clash uppercase font-semibold text-2xl py-7 px-20 text-black bg-white'>
                    Join Dsgnntalk
                </button> */}

                <Button text="Join Dsgnntalk" className="text-2xl py-7 px-20" />
            </div>
        </footer>


    </>
    
    
  )
}

export default Home;
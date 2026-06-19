import Card from './components/Card'

const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2sSeQqjaUTuZ3gRgkKjidpaipF_l6s72lBw&s",
      companyName: "Google",
      post: "Frontend Engineer",
      datePosted: "5 days ago",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://s3-alpha.figma.com/hub/file/2747494711/31b6ad5c-b404-4086-a685-89b1d5294f1c-cover.png",
      companyName: "Microsoft",
      post: "Backend Developer",
      datePosted: "2 weeks ago",
      tag1: "Full Time",
      tag2: "Entry Level",
      pay: "$42/hr",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
      companyName: "Amazon",
      post: "iOS Developer",
      datePosted: "1 week ago",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$40/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://logos-world.net/wp-content/uploads/2021/11/Meta-Symbol.png",
      companyName: "Meta",
      post: "Machine Learning Engineer",
      datePosted: "3 days ago",
      tag1: "Internship",
      tag2: "Entry Level",
      pay: "$38/hr",
      location: "Remote"
    },
    {
      brandLogo: "https://images.seeklogo.com/logo-png/42/1/apple-logo-png_seeklogo-427436.png",
      companyName: "Apple",
      post: "Cloud Solutions Architect",
      datePosted: "10 days ago",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$55/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSizQq7KJ5NDbGjh-4wklylfJ9hAaOJ5vBtJA&s",
      companyName: "Netflix",
      post: "Data Scientist",
      datePosted: "4 weeks ago",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$75/hr",
      location: "Los Angeles, USA"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYDEXuBIhUSRBG1gfGSw6I6dWZm-GGNCah2g&s",
      companyName: "Adobe",
      post: "AI Research Engineer",
      datePosted: "6 days ago",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$44/hr",
      location: "Noida, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlJIOGtHi6yLhWs9gI0Bz1T83KoUzuqCQ7IQ&s",
      companyName: "Uber",
      post: "Software Engineer",
      datePosted: "2 days ago",
      tag1: "Contract",
      tag2: "Mid Level",
      pay: "$50/hr",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://s.yimg.com/uu/api/res/1.2/Bz8iDlw16Zf6PVc.y33xdg--~B/aD0zOTA7dz02MTA7YXBwaWQ9eXRhY2h5b24-/http://globalfinance.zenfs.com/Finance/US_AHTTP_ENTREPRENEUR_H_NEW_LIVE/1405612741-airbnb-why-new-logo_original.jpg",
      companyName: "Airbnb",
      post: "GPU Programmer",
      datePosted: "8 weeks ago",
      tag1: "Remote",
      tag2: "Senior Level",
      pay: "$68/hr",
      location: "Remote"
    },
    {
      brandLogo: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg",
      companyName: "NVIDIA",
      post: "Database Adminstrator",
      datePosted: "12 days ago",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$52/hr",
      location: "Pune, India"
    }
  ];


  return (
    <div className='parent'>
      {jobOpenings.map(function(elem, idx){
        return <div key={idx}>
          <Card 
        company={elem.companyName} 
        post={elem.post}
        tag1={elem.tag1}
        tag2={elem.tag2}
        salary={elem.pay}
        datePosted={elem.datePosted}
        location={elem.location}
        logo={elem.brandLogo}
        />
        </div>
      })}
    </div>
  )
}

export default App


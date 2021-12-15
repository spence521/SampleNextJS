import { useRouter } from 'next/router';

//our-domain.com/news/<this can be any string value>



function DetailPage() {
    //get access to values encoded in the URL
    const router = useRouter();
    
    //gives you access to a nested object. get access to values in the URL.
    const newsId = router.query.newsId; // hold the concrete value in the URl for this dynamic segment for which this page was visited.
    //console.log(router.query.newsId);


    // Send a request to the backend API to fetch the news item with newsId [building dynamic pages]
    


    return <h1>The Detail Page</h1>
}


//must do this so that next.js can find it.
export default DetailPage;
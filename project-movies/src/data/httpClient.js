const API = "https://api.themoviedb.org/3";

export function get(path){
    return fetch(API + path,{
        headers:{
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZjVhNmRmMzhjN2VmMDA2ZjJjZDgwNmRmNDE5NTRkMCIsInN1YiI6IjY1MzFiNTAzOWFjNTM1MDBjNTZiZmJjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oROW9MQygsGCSzXTRJvbVYt3NoOgfsgaKOLcM_OZQJc',
            "Content-Type": "application/json;charset=utf-8",
        },
    }).then((result) => result.json());
}
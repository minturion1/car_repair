import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router-dom";
import { getServiceById } from "../../../api/servicesApi";
import ProgressBar from "../../comp/ProgressBar";
import FAQ from "../../FAQ/FAQ";
import Features from "./Features/Features";
import Header from "./Header/Header";
import s from './ServiceDetail.module.css';


function ServiceDetailContent() {

    const { id } = useParams();
    const {
    data: service,
    isFetching,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["service", id],
    queryFn: ()=>(getServiceById(id)),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
    placeholderData: (prev) => prev,
  });
    console.log(service)
    if (isLoading) {
    return (
      <div className={s.skeleton}>
        <Skeleton
          style={{ marginBottom: "20px", borderRadius: "20px" }}
          baseColor="#2b2b2b"
          highlightColor="#fff"
          height={250}
          width="100%"
        />
        <Skeleton
          style={{ marginBottom: "20px", borderRadius: "20px" }}
          baseColor="#2b2b2b"
          highlightColor="#fff"
          height={250}
          width="100%"
        />
        <Skeleton
          style={{ marginBottom: "20px", borderRadius: "20px" }}
          baseColor="#2b2b2b"
          highlightColor="#fff"
          height={250}
          width="100%"
        />
      </div>
    );
  }

  if (isError) {
    return <p style={{ color: "red" }}>Error: {error.message}</p>;
  }


  return (
    <div className={s.mainContent}>
        {isFetching && <ProgressBar />}
        <Header service={service}/>
        <Features features={service.features} />
        <FAQ />
    </div>
  )

}

export default ServiceDetailContent;
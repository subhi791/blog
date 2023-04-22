import React from "react";
import "./style/DashboardBlogContent.css";
import { useSelector } from "react-redux";
import { Avatar, Card, Skeleton } from "antd";
import moment from "moment";
import { UserOutlined } from "@ant-design/icons";

const { Meta } = Card;

function DashboardBlogContent() {
  const all_data_of_post = useSelector(
    (state) => state.published_show_request_response_data
  );
  const user_details_of_published_posts = useSelector(
    (state) => state.user_details_for_published_post
  );

  const dashboard_loader = useSelector((state) => state.dashboard_loader);

  return (
    <div>
      {dashboard_loader ? (
        <Skeleton />
      ) : (
        <div className="wholeblogcontent">
          <div className="contentheading">
            <h1>{all_data_of_post.name}</h1>
          </div>
          <div className="contentavatar">
            <Card
              size="small"
              style={{
                width: 300,
                backgroundColor: "white",
              }}
            >
              <Meta
                avatar={
                  user_details_of_published_posts.user.profile_url ? (
                    <Avatar
                      src={user_details_of_published_posts.user.profile_url}
                      size={50}
                    />
                  ) : (
                    <Avatar icon={<UserOutlined />} size={50} />
                  )
                }
                title={user_details_of_published_posts.user.first_name}
                description={`${moment(all_data_of_post.updated_at).format(
                  "DD-MMM-YYYY"
                )}`}
              />
            </Card>
          </div>
          <div className="maincontentofpost">{all_data_of_post.content}</div>
          <div className="imageincontent">
            {all_data_of_post?.image_url ? (
              <img
                src={all_data_of_post?.image_url}
                alt="Cannot Be Displayed"
              ></img>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}

export default DashboardBlogContent;

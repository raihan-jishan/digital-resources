import { ReviewCard } from "@/components/ui/card";
import Heading from "@/components/ui/heading";
import { clientReviewsData } from "@/constants/index";
import { Animation } from "@/global/animation";
import Wrapper from "@/global/wrapper";

const Reviews = () => {
  return (
    <div className=" dark:bg-gray-900 dark:text-white bg-white text-black p-4">
      <Animation className={'mt-20'}>
        <Heading
          title={"reviews"}
          textSmall
          borderSide
          description={"What people are saying"}
          paragraph={
            "See how webcraft.ai empowers businesses of all sizes. Here's what real people are saying on Twitter"
          }
        />
        <Wrapper className="flex flex-col items-center justify-center py-5 relative">
          <div className="mt-0 grid grid-cols-1 lg:grid-cols-3 gap-6 w-full md:gap-8 py-10 md:py-20 flex-wrap max-w-4xl max-lg:gap-8">
            {clientReviewsData.map((item, index) => {
              return (
                <ReviewCard
                  key={index}
                  name={item.name}
                  handle={item.twitterHandle}
                  review={item.review}
                  Avatar={item.imageUrl}
                />
              );
            })}
          </div>
        </Wrapper>
      </Animation>
    </div>
  );
};

export default Reviews;

interface Props {}

const Home = (props: Props) => {
    return (
        <div>
            <div className="text-[#179d7d] text-4xl font-semibold">Welcome, Admin!</div>
            <div className="mt-4">
                Tại đây bạn có thể đăng tải, chỉnh sửa truyện/thể loại cho trang web của bạn.
            </div>
        </div>
    );
};

export default Home;

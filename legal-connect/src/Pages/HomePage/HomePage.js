import './HomePage.css';

const HomePage = () => {
    const name = 'Minesh';

    const eventList = [{name: "hello", id: 1},{name: "human", id: 2}, {name: "my", id: 3}, {name: "styling", id: 4}, {name: "is", id: 5}, {name: "awesome", id: 6},
        {name: "hello", id: 23},{name: "human", id: 10}, {name: "my", id: 11}, {name: "styling", id: 16}, {name: "is", id: 17}, {name: "awesome", id: 22},
        {name: "hello", id: 24},{name: "human", id: 9}, {name: "my", id: 12}, {name: "styling", id: 15}, {name: "is", id: 18}, {name: "awesome", id: 21},
        {name: "hello", id: 25},{name: "human", id: 8}, {name: "my", id: 13}, {name: "styling", id: 14}, {name: "is", id: 19}, {name: "awesome", id: 20}
    ]

    const events = eventList.map(event => <li key={event.id}>{event.name}</li>);

    const image='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAsAMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAgMEBQEGB//EAC0QAAICAQIFAgYCAwEAAAAAAAABAgMRBDEFEiFBUTJxEyJSYYGhQkNicpEz/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AP3EAAAAAAAAA8bxu0B6CuVqWyyQd0nskgLxkzfFn5HxZeQNIKFc+6RONqe/QCwHiaezPQAAAAAAAAAAAAAAAUWWdosCc7Eui6splJvd5IgAAAAAAAAD2MnHYvhYpb7mcAbAUV2dmXZA9AAAAAAAAAIylyxbAhdPHyrcoPW8s8AAAAQturpjmyWCvV6haevzN7I40pysk5Tk5N92B0p8TrXprk/foI8Trfqrmv2czAA71Vtd0c1yUvP2JnAhOVc1KDcZeUdjR6hait7KcfUgLwAAL6Z5WGUHqeHlAawRjLmSaJAAAAAAApvey/JcZrHmbAgAAAAA4ust+LqJvsnhFAeeZ58gAAABdo7fhaiL7N4l7FIXqWN8gfQgAAAALqHui4zVvE4/s0gAAAAAHjMsnltmpmV7geAAAAAOJrKnVqZp93lfkpOzrNN8ev5cKa2bORKMoScZpprswIgAAXaSt26mEVsnzP2RVGMpNKKbb2SOxo9MtPB5a55ep+ANJ4AAAAHq3Xua0ZFujWgAAAAAAzLP1y9zUZ7o4lnyBWAAAAAFd1FV6xbHPhljaisy6Lu/Bls4hRHKg3N/bYCqXDIv0Wte6yI8MivVY37LBGXE5fxqS92FxOX8ql+JAbaaK6FiuPXy92WfkyV8Qol0k5Qf+S6GuLUllPp5AAAAAAJQWZL3NRnpWZZ8GgAAAAAAFdscw9iwAYwTtjyvPYgAKtTqI6eHNLrJ7RXcnbZGquVk9kjh3Wyusdkt328ICV99l8szl8vaPZFQAAAAC2jUWUSzB9HvF7MqAHc02ohqI5jut14LTg02zptU4dv+NHcqsVtcZx2f6AkATrjzP7IC6qOI9d2TAAAAAAAAAAjKPMsGeUeVmojOKkgOJxW30VLbdnPNnE6bYamc5xfLLHK+2xjAAAAAAAAAHQ4Vb1lU/wDZHPNnDKrZ6iM4RfKvVLsB1opt9DTCKjHCEIqKwiQAAAAAAAAAAAAABGUIyi4ySae6ZzdTwmMsvTS5H9L6o6gA+Zu0l9L+euXuuqKEfWlU9PVZ/wClUJfdoD5cH0T4dpH/AEr8NoLh2kX9Kf5YHzucF9Ok1F3orePqfRH0MNPTX6KYJ/aKLQOXpeEwjiV8ud/StjpxjGEVGKSS2SPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/2Q=='
    const description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sit doloremque vitae necessitatibus dignissimos iusto voluptas aliquam maxime, eligendi, vel, tempore assumenda? Consequatur nemo voluptatum esse officia provident veniam. Laborum?'

    return ( 
        <div className="homepage">
            <div className="container main-container">
                <div className="left">
                    <div className="ongoing">
                        <h2 className="welcomeMessage">Hello {name}</h2>
                        <div className="ongoing-container">
                            <h2 className="ongoingHeading">Ongoing</h2>
                            <ul className="ongoing-list">
                                {events}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="featuredContent">
                        <div className="featuredContentTop">
                            <img className="featuredContentProfileImage" src={image} alt="profilePicture"/>
                            <h3 className="featuredContentProfileName">{name}</h3>
                        </div>
                        <p className="featuredContentProfileDescription">{description}</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default HomePage

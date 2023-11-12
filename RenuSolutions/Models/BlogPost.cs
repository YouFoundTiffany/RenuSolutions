namespace RenuSolutions.Models
{
    public class BlogPost
    {

        public int BlogPostId { get; set; }
        public string Title { get; set; }
        public string Summary { get; set; }
        public string Body { get; set; }
        public string[] Tags { get; set; }
        public int ProfileId { get; set; }
        public Profile Account { get; set; }
    }
}
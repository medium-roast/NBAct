# NBAct: Reactjs based NBA player strength visualization

 ## Overview
 This project creates a dashboard that visualizes selected NBA players' strength via a shot chart and a profile view. Extra filters are implemented to support more customized visualization of the shot data, including adjustable shot display threshold, two selectable shot display themes (hexbin or scatter), and an option to enable tooltips that show shot efficiency. The webpage contains an autocomplete search bar that provides a list of relevant players with names and images according to varying search input.  
 
 The webpage is developed using Reactjs, d3 and Ant Design, and the player data is obtained from APIs provided by [stat.nba.com](https://stats.nba.com/). In details, the [d3-shotchart](https://www.npmjs.com/package/d3-shotchart) library is used to create the shotchart, the Ant Design [Autocomplete](https://ant.design/components/auto-complete/) component is adopted in the search bar, and the [nba package](https://github.com/bttmly/nba) is used to fetch and parse the raw data from [stat.nba.com](https://stats.nba.com/).
 
 
 
 
 ## Demo
| <img src="demo/dashboard.PNG" width="700"> |
:-------------------------:
| <em>Dashboard</em> |
| <img src="demo/search-bar.png" width="700"> |
| <em>Autocomplete search bar</em> |

# Table concept for inbox

Possible Solutions:

- individual components for table, thead, tbody, th, td
- using `*ngFor` to repeat columns and rows via config
- url with `include_config=1` parameter to load config only once
- using *pipes* to format data (`<app-date diplay-value="tableData[rowIndex][colIndex] | formatTableCell(column.type)">`)

```javascript
of(1,2,3).
    subscribe(
        next => {
            if(next === 2) {
                throw new Error('test');
            }
            console.log(next); // 1 wird ausgegeben
        }, 
        error => {
            console.log('error on 2', error);
        },       
        () => {
            
        }       
    );



```




```
<app-inbox-table [tableConfig]="{columns:{id: "number", name: "string"}}">

</app-inbox-table>


<app-remote-inbox-table [data-source-url]="http://localhost:4200/inbox-items/?sort=%sort%&count_per_page=%count_per_page%&filter=%filter%&config_only=%config_only%">

</app-inbox-table>
```
1.) http://localhost:4200/inbox-items/?sort=%sort%&count_per_page=%count_per_page%&filter=%filter%&config_only=1

```
{
	columns: [{name: "id", type: "number", label: "ID", "componentName": "app-number"}],
	data: []
}
```

```
export class RemoteInboxTable {
	columns: [];
	tableData: [];
	
	ngOnLoad() {
		fetch(http://localhost:4200/inbox-items/?sort=%sort%&count_per_page=%count_per_page%&filter=%filter%&config_only=1).
		then(....);
		// set columns and tableData
	}
}
```

http://localhost:4200/environment
```
{
	dateFormat: "d.m.Y H:i" => 19.12.1983 08:04
}
```

```
export class DateDisplay {
	
	constructor(EnvironmentService env) {
		this.dateFormat = env.dateFormat;
	}
}
```
```
<app-date diplay-value="myDate | formatDate('de_DE')">

<app-date diplay-value="myDate | [myFormatter]('de_DE')">
									date
									number
									string
									datetime

<app-date diplay-value="tableData[rowIndex][colIndex] | formatTableCell(column.type)"> => date => 19.12.1983, number => 1.234,00, 

```

```

<div class="table">
	<div class="thead">
		<div class="tr">
			<div class="th" *ngFor="let column in columns">
				{{column.label}}
			</div>
		</div>
	</div>
	<div class="tbody">
		<div class="tr" *ngFor="let row in tableData;rowIndex of i;">
			<div class="td" *ngFor="let column in columns;colIndex of i;">
				<app-decimal [value]="tableData[rowIndex][colIndex]"> => 2,54 	 (2.54)
				<app-date [value]="tableData[rowIndex][colIndex]"> => 19.12.1983 (1983-12-19)
				<[component-name] [value]="">
			</div>
		<div>
	</div>
</div>
```

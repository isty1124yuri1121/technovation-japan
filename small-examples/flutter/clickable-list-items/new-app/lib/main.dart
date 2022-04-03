import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(title: 'Clickable List Items'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  final List<String> categories = <String>['cats', 'dogs', 'chickens', 'pizza'];

  final Set<String> myCategories = Set<String>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            SizedBox(
              height: 50,
              width: 150,
              child: ElevatedButton(
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                        builder: (context) => MyCategoriesPage(
                            title: 'my title', items: myCategories.toList())),
                  );
                },
                child: const Text('Farmer'),
              ),
            ),
            ListView.builder(
              padding: const EdgeInsets.all(8),
              itemCount: categories.length,
              itemBuilder: (BuildContext context, int index) {
                return InkWell(
                  onTap: () {
                    setState(() {
                      myCategories.add(categories[index]);
                    });
                  },
                  child: Container(
                    height: 50,
                    margin: EdgeInsets.all(2),
                    color: Colors.blue,
                    child: Text('${categories[index]}'),
                  ),
                );
              },
            ),
          ],
        ),
      ),
    );
  }
}

class MyCategoriesPage extends StatelessWidget {
  MyCategoriesPage({Key? key, required this.title, required this.items})
      : super(key: key);

  final String title;

  final List<String> items;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Farmers'),
      ),
      body: ListView.builder(
        padding: const EdgeInsets.all(8),
        itemCount: items.length,
        itemBuilder: (BuildContext context, int index) {
          return InkWell(
            child: Container(
              height: 50,
              margin: EdgeInsets.all(4),
              child: ListTile(
                title: Text('${items[index]}'),
              ),
            ),
          );
        },
      ),
    );
  }
}

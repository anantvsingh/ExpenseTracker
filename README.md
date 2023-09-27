# ExpenseTracker
dependencies:
-npm install @react-navigation/native
-npm install react-native-screens react-native-safe-area-context
-{

    -add 'import android.os.Bundle;' under package name and override part in MainActivity.java file

    public class MainActivity extends ReactActivity {
  // ...
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }
  // ...
}}

-npm install @react-navigation/bottom-tabs

-npm install --save react-native-vector-icons



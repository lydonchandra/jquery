if ( jQuery.fx ) {

    module('effects', { teardown: moduleTeardown } );

    test('sanity check', function() {
        expect(1);
        ok( jQuery('#dl:visible, #qunit-fixture:visible, #foo:visible').length === 3,
            'QUnit state is correct for testing effects');
    });

    test('show()', function() {
//        expect(26);
        var hiddendiv = jQuery('div.hidden');
        hiddendiv.hide().show();
        equal( hiddendiv.css('display'),
               'block',
               'Make sure pre-hidden div is visible');

        var div = jQuery('<div>')
                     .hide()
                     .appendTo('#qunit-fixture')
                     .show();
        equal( div.css('display'),
               'block',
               'Make sure pre-hidden divs show');

        QUnit.reset();

        hiddendiv = jQuery('div.hidden');
        equal( jQuery.css( hiddendiv[0], 'display'),
               'none',
               'hiddendiv is display:none');

        hiddendiv.css('display', 'block');
        equal( jQuery.css( hiddendiv[0], 'display'),
               'block',
               'hiddendiv is display: block');


        hiddendiv.css('display', '');
        var pass = true;
        div = jQuery('#qunit-fixture div');
        div.show()
           .each( function() {
                    if( this.style.display == 'none' ) {
                        pass = false;
                    }
                });
        // make sure pass is true & doesnt change state
        ok( pass, 'Show' );

        var speeds = {
            'null speed' : null,
            'undefined speed': undefined,
            'false speed': false
        }

        // make sure passing bogus arguments doesn't change state var ?
        jQuery.each( speeds,
                     function( name, speed ) {
                         pass = true;
                         div.hide()
                             .show(speed)
                             .each( function() {
                                         if( this.style.display == 'none' ) {
                                             pass = false;
                                         }
                                  });
                             ok( pass, 'Show with ' + name );
                     });

        jQuery.each( speeds, function( name, speed ) {
            pass = true;
            div.hide()
               .show( speed, function() {
                                 pass = false;
                             });
            ok( pass, 'Show with ' + name + ' does not call animate callback');
        });

        jQuery('#qunit-fixture')
                .append('<div id=show-tests><div><p><a href=#></a></p><code></code><pre></pre><span></span></div><table><thead><tr><th></th></tr></thead><tbody></tbody></table><ul><li></li></ul></div><table id=test-table></table>');

        var old= jQuery('#test-table').show().css('display') !== 'table';
        jQuery('#test-table').remove();

        var test = {
            'div' : 'block',
            'p'     : 'block',
            'a'     : 'inline',
            'code'  : 'inline',
            'pre'   : 'block',
            'span'  : 'inline'
        }




    });



} // if ( jQuery.fx )
